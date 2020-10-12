<template>
  <mdb-card>
    <mdb-card-body>
      <h2 class="text-center font-weight-bold pt-4 pb-5">
        <strong>Оформить пожертвование</strong>
      </h2>
      <mdb-row>
        <mdb-col lg="12" class="mb-4">
          <mdb-tab pills justify color="elegant">
            <mdb-tab-item :active="tab == 0" @click.native.prevent="tab = 0"
              >Банковская карта</mdb-tab-item
            >
            <mdb-tab-item :active="tab == 1" @click.native.prevent="tab = 1"
              >Яндекс.Деньги</mdb-tab-item
            >
            <mdb-tab-item :active="tab == 2" @click.native.prevent="tab = 2"
              >PayPal</mdb-tab-item
            >
            <mdb-tab-item :active="tab == 3" @click.native.prevent="tab = 3"
              >Сбербанк</mdb-tab-item
            >
            <mdb-tab-item :active="tab == 4" @click.native.prevent="tab = 4"
              >BTC/ETH</mdb-tab-item
            >
          </mdb-tab>

          <mdb-tab-content>
            <mdb-tab-pane class="fade" key="show1" v-if="tab == 0">
              <form>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <mdb-btn
                      :active="1 == 0"
                      id="option4-1"
                      name="groupOfMaterialRadios"
                      radioValue="option1"
                      v-model="radioBankSum"
                      label="Option 1"
                    />
                    <mdb-btn
                      id="option4-2"
                      name="groupOfMaterialRadios"
                      radioValue="option2"
                      v-model="radioBankSum"
                      label="Option 2"
                    />
                    <mdb-btn
                      id="option4-3"
                      name="groupOfMaterialRadios"
                      radioValue="option3"
                      v-model="radioBankSum"
                      label="Option 3"
                    />

                    <!-- <mdb-btn-group > 
                    <mdb-btn color="unique">Left</mdb-btn>
                    <mdb-btn color="unique">Middle</mdb-btn>
                    <mdb-btn color="unique">Right</mdb-btn>
                  </mdb-btn-group> -->
                    <!-- <mdb-btn color="elegant">500 ₽</mdb-btn> -->
                  </div>
                </div>
                <!--Grid row-->

                <!--Username-->
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input
                    type="text"
                    class="form-control py-0"
                    placeholder="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                <!--email-->
                <label for="email" class="">Email (optional)</label>
                <input
                  type="text"
                  id="email"
                  class="form-control mb-4"
                  placeholder="youremail@example.com"
                />

                <!--address-->
                <label for="address" class="">Address</label>
                <input
                  type="text"
                  id="address"
                  class="form-control mb-4"
                  placeholder="1234 Main St"
                />

                <!--address-2-->
                <label for="address-2" class="">Address 2 (optional)</label>
                <input
                  type="text"
                  id="address-2"
                  class="form-control mb-4"
                  placeholder="Apartment or suite"
                />

                <!--Grid row-->
                <div class="row">
                  <!--Grid column-->
                  <div class="col-lg-4 col-md-12 mb-4">
                    <label for="country">Country</label>
                    <select
                      class="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="state">State</label>
                    <select
                      class="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <!--Grid column-->

                  <!--Grid column-->
                  <div class="col-lg-4 col-md-6 mb-4">
                    <label for="zip">Zip</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                  <!--Grid column-->
                </div>
                <!--Grid row-->

                <hr />

                <div class="mb-1">
                  <input
                    type="checkbox"
                    class="form-check-input filled-in"
                    id="chekboxRules"
                  />
                  <label class="form-check-label" for="chekboxRules"
                    >I accept the terms and conditions</label
                  >
                </div>
                <div class="mb-1">
                  <input
                    type="checkbox"
                    class="form-check-input filled-in"
                    id="safeTheInfo"
                  />
                  <label class="form-check-label" for="safeTheInfo"
                    >Save this information for next time</label
                  >
                </div>
                <div class="mb-1">
                  <input
                    type="checkbox"
                    class="form-check-input filled-in"
                    id="subscribeNewsletter"
                  />
                  <label class="form-check-label" for="subscribeNewsletter"
                    >Subscribe to the newsletter</label
                  >
                </div>

                <hr />

                <mdb-btn color="primary" size="lg" block type="submit"
                  >Next step</mdb-btn
                >
              </form>
            </mdb-tab-pane>
            <mdb-tab-pane class="fade" key="show2" v-if="tab == 1">
              <!--Grid row-->
              <div class="row">
                <!--Grid column-->
                <div class="col-md-5 mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                    class="img-fluid z-depth-1-half"
                    alt="Second sample image"
                  />
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-7 mb-4">
                  <h5 class="mb-3 h5">Additional premium support</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, ea ut aperiam corrupti, dolorem.
                  </p>

                  <mdb-select color="info" :options="options" />

                  <mdb-btn color="primary" size="md"
                    >Add premium support to the cart</mdb-btn
                  >
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->

              <hr class="mb-5" />

              <!--Grid row-->
              <div class="row">
                <!--Grid column-->
                <div class="col-md-5 mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/images/44.jpg"
                    class="img-fluid z-depth-1-half"
                    alt="Second sample image"
                  />
                </div>
                <!--Grid column-->

                <!--Grid column-->
                <div class="col-md-7 mb-4">
                  <h5 class="mb-3 h5">MDB Membership</h5>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, ea ut aperiam corrupti, dolorem.
                  </p>

                  <mdb-select color="info" :options="options2" />

                  <mdb-btn color="primary" size="md"
                    >Add MDB Membership to the cart</mdb-btn
                  >
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->

              <hr class="mb-4" />

              <mdb-btn color="primary" size="lg" block type="submit"
                >Next step</mdb-btn
              >
            </mdb-tab-pane>
            <mdb-tab-pane class="fade" key="show3" v-if="tab == 2">
              <div class="d-block my-3">
                <div class="mb-2">
                  <input
                    name="group2"
                    type="radio"
                    class="form-check-input with-gap"
                    id="radioWithGap4"
                    checked
                  />
                  <label class="form-check-label" for="radioWithGap4"
                    >Credit card</label
                  >
                </div>
                <div class="mb-2">
                  <input
                    name="group2"
                    type="radio"
                    class="form-check-input with-gap"
                    id="radioWithGap5"
                  />
                  <label class="form-check-label" for="radioWithGap5"
                    >Debit card</label
                  >
                </div>
                <div class="mb-2">
                  <input
                    name="group2"
                    type="radio"
                    class="form-check-input with-gap"
                    id="radioWithGap6"
                  />
                  <label class="form-check-label" for="radioWithGap6"
                    >Paypal</label
                  >
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="cc-name123">Name on card</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-name123"
                    placeholder=""
                    required
                  />
                  <small class="text-muted"
                    >Full name as displayed on card</small
                  >
                  <div class="invalid-feedback">
                    Name on card is required
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="cc-number123">Credit card number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-number123"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 mb-3">
                  <label for="cc-expiration123">Expiration</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-expiration123"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Expiration date required
                  </div>
                </div>
                <div class="col-md-3 mb-3">
                  <label for="cc-cvv123">CVV</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cc-cvv123"
                    placeholder=""
                    required
                  />
                  <div class="invalid-feedback">
                    Security code required
                  </div>
                </div>
              </div>
              <hr class="mb-4" />

              <mdb-btn color="primary" size="lg" block type="submit"
                >Place order</mdb-btn
              >
            </mdb-tab-pane>
          </mdb-tab-content>
        </mdb-col>
      </mdb-row>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbBtnGroup,
  mdbInput,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbIcon,
  mdbCard,
  mdbView,
  mdbMask,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbTooltip,
  mdbTbl,
  mdbTblHead,
  mdbTblBody,
  mdbBtn,
  mdbTab,
  mdbTabItem,
  mdbTabContent,
  mdbTabPane,
  mdbSelect
} from "mdbvue";

export default {
  name: "donate",
  components: {
    mdbBtnGroup,
    mdbInput,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbCard,
    mdbView,
    mdbMask,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbTooltip,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbBtn,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbSelect
  },
  data() {
    return {
      tab: 0,
      radioBankSum: "1000",
      options: [
        {
          text: "Choose a period of time",
          value: null,
          disabled: true,
          selected: true
        },
        { text: "+6 months : 200$", value: 1 },
        { text: "+12 months: 400$", value: 2 },
        { text: "+18 months: 800$", value: 3 },
        { text: "+24 months: 1200$", value: 4 }
      ],
      options2: [
        {
          text: "Choose a period of time",
          value: null,
          disabled: true,
          selected: true
        },
        { text: "+6 months : 200$", value: 1 },
        { text: "+12 months: 400$", value: 2 },
        { text: "+18 months: 800$", value: 3 },
        { text: "+24 months: 1200$", value: 4 }
      ]
    };
  }
};
</script>

<style></style>
