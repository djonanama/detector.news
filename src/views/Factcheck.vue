<template>
  <mdb-card class="m-2 p-1">
    <mdb-card-body>
      <h4 class="text-center font-weight-bold pt-4 pb-5">
        <strong
          >Предложите заявления представителей государственных органов и
          политиков для проверки на предмет наличия фейковой информации</strong
        >
      </h4>
      <mdb-container>
        <form>
          <mdb-row class="align-items-end">
            <mdb-col sm="12">
              <mdb-input
                type="textarea"
                label="Заявление"
                :rows="5"
                required
                v-model="zavvalue"
              />
            </mdb-col>
            <mdb-col sm="12">
              <mdb-input label="Автор высказывания" required v-model="value" />
            </mdb-col>
            <mdb-col sm="12">
              <mdb-date-picker
                inline
                label="Дата высказывания"
                :option="option"
                required
                v-model="date"
              />
            </mdb-col>
            <mdb-col sm="12">
              <mdb-input
                label="Место публикации высказывания (ссылка)"
                required
                v-model="link"
              />
            </mdb-col>
            <mdb-col sm="12">
              <mdb-select
                v-model="fakeval"
                placeholder=""
                :visibleOptions="5"
                required
                label="Степень истинности"
              />
            </mdb-col>
            <mdb-col sm="12">
              <mdb-input
                type="textarea"
                label="Комментарий"
                :rows="5"
                v-model="comment"
              />
            </mdb-col>
          </mdb-row>
          <mdb-row class="justify-content-md-center">
            <mdb-col md="auto" col="12">
              <mdb-btn type="submit" color="primary" style="width: 230px">
                Отправить
              </mdb-btn>
            </mdb-col>
          </mdb-row>
        </form>
      </mdb-container>
    </mdb-card-body>
  </mdb-card>
</template>

<script>
import {
  mdbBtn,
  mdbSelect,
  mdbInput,
  mdbRow,
  mdbCol,
  mdbContainer,
  mdbCard,
  mdbCardBody,
  mdbDatePicker
} from "mdbvue";

export default {
  name: "factcheck",
  components: {
    mdbBtn,
    mdbSelect,
    mdbDatePicker,
    mdbRow,
    mdbCol,
    mdbContainer,
    mdbInput,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      option: {
        week: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        month: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь"
        ],
        buttons: {
          ok: "Ok",
          cancel: "Отмена",
          today: "Сегодня"
        }
      },
      zavvalue: "",
      value: "",
      date: "",
      link: "",
      fakeval: [
        { text: "Правда", value: "1" },
        { text: "В основном правда", value: "2" },
        { text: "Наполовину правда", value: "3" },
        { text: "В основном ложь", value: "4" },
        { text: "Ложь", value: "5" }
      ],
      comment: ""
    };
  }
};
</script>
