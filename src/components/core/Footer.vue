<template>
  <!-- Footer fixed-bottom -->
  <div class="castom-fix-footer">
    <mdb-footer color="unique-color-dark" class="page-footer font-small pt-4">
      <mdb-container class="mt-5 mb-4 text-center text-md-left">
        <mdb-row class="mt-3">
          <mdb-col md="4" lg="4" xl="4" class="mb-4">
            <h6 class="text-uppercase font-weight-bold">
              <strong>О компании</strong>
            </h6>
            <hr
              class="primary-color-dark accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 107px"
            />
            <p>
              Detector – веб-сервис для повышения информированности граждан о
              событиях в стране, а также решение для проверки материалов СМИ и
              заявлений представителей государственных органов и политиков на
              предмет наличия фейковой информации.
            </p>
          </mdb-col>
          <mdb-col md="4" lg="4" xl="4" class="text-center mb-4">
            <p>
              <!-- <router-link
              to="/donate"
            > -->
              <mdb-btn color="danger" style="width: 230px" disabled>
                Помочь проекту
              </mdb-btn>
              <!-- </router-link> -->
            </p>
            <p>
              <!-- <router-link
              to="/factcheck"
            > -->
              <mdb-btn outline="primary" style="width: 230px" disabled>
                Suggest a Fact-check
              </mdb-btn>
              <!-- </router-link> -->
            </p>
          </mdb-col>
          <mdb-col md="4" lg="4" xl="4" class="mb-4">
            <h6 class="text-uppercase font-weight-bold">
              <strong>Социальные сети</strong>
            </h6>
            <hr
              class="primary-color-dark accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style="width: 157px"
            />
            <p>
              <a class="ml-0"
                ><i class="fab fa-facebook white-text mr-lg-4"> </i>Facebook</a
              >
            </p>
            <p>
              <a class=""
                ><i class="fab fa-twitter white-text mr-lg-4"> </i>Twitter</a
              >
            </p>
            <p>
              <a class=""
                ><i class="fab fa-linkedin-in white-text mr-lg-4"> </i
                >LinkedIn</a
              >
            </p>
            <p>
              <a class=""
                ><i class="fab fa-instagram white-text mr-lg-4"> </i
                >Instagram</a
              >
            </p>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="text-center pt-3 py-3">
        <form>
          <ul class="list-unstyled list-inline mb-0">
            <li class="list-inline-item">
              <mdb-input label="E-mail" style="width: 260px" disabled />
            </li>
            <li class="list-inline-item">
              <mdb-btn
                outline="danger"
                type="submit"
                style="width: 260px"
                disabled
                >Подписатся на рассылку</mdb-btn
              >
            </li>
          </ul>
        </form>
      </div>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
          &copy; 2020 DETECTOR
        </mdb-container>
      </div>
    </mdb-footer>
    <!-- Footer -->
  </div>
</template>

<script>
import {
  mdbFooter,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbBtn,
  mdbInput
} from "mdbvue";
export default {
  name: "FooterPage",
  components: {
    mdbInput,
    mdbBtn,
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style lang="stylus" scoped>
input[type=date]:focus:not([readonly]), input[type=datetime-local]:focus:not([readonly]), input[type=email]:focus:not([readonly]), input[type=number]:focus:not([readonly]), input[type=password]:focus:not([readonly]), input[type=search-md]:focus:not([readonly]), input[type=search]:focus:not([readonly]), input[type=tel]:focus:not([readonly]), input[type=text]:focus:not([readonly]), input[type=time]:focus:not([readonly]), input[type=url]:focus:not([readonly]), textarea.md-textarea:focus:not([readonly]) {
    border-bottom: 1px solid #fff;
    box-shadow: 0 1px 0 0 #fff;
}

.form-control {
    color: #fff;
}
.form-control:focus {
    color: #fff;
}
</style>
