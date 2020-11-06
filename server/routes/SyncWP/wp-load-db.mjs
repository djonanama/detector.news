import Axios from "axios";
import WP from "wpapi";

const WP_HOME = process.env.WP_HOST || "localhost";
const WP_LOGIN = process.env.WP_LOGIN || "admin";
const WP_PASSWORD = process.env.WP_PASSWORD || "admin";

function load_WP() {
  this.subReplaseLink = function(str) {
    return str.replace(
      /(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s'"\\])+(\/wp-content\/uploads\/)/gim,
      "/uploads/"
    );
  };

  this.wp = new WP({
    endpoint: WP_HOME + "/wp-json",
    username: WP_LOGIN,
    password: WP_PASSWORD
  });
}

load_WP.prototype.loadObject = async function(type, id, fn) {
  if (id > 0) {
    const res = {};
    await this.wp[type]()
      .id(id)
      .auth()
      .then(
        data => {
          return fn(data, this.subReplaseLink);
        },
        err => {
          console.log(err);
        }
      );
  }
};

load_WP.prototype.loadObjectACF = async function(type, fn) {
  const response = await Axios({
    url: "http://" + WP_HOME + "/wp-json/acf_field/v1/" + type,
    method: "GET",
    auth: {
      username: WP_LOGIN,
      password: WP_PASSWORD
    }
  });

  return fn(response.data);
};

export default load_WP;
