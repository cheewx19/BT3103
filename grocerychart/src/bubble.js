import { Bubble } from "vue-chartjs";
import database from "./firebase.js";
export default {
  extends: Bubble,
  data: function() {
    return {
      datacollection: {
        datasets: [
          {
            label: "",
            backgroundColor: "",
            data: [
              {
                x: 0,
                y: 0,
                r: 0
              }
            ]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Groceries"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  methods: {
    fetchItems: function() {
      database
        .collection("items")
        .get()
        .then(querySnapShot => {
          querySnapShot.forEach(doc => {
            this.datacollection.datasets.push({
              label: doc.data().name,
              backgroundColor: doc.data().color,
              data: [
                {
                  x: doc.data().x,
                  y: doc.data().y,
                  r: doc.data().stock
                }
              ]
            }); 
          });
          this.renderChart(this.datacollection, this.options);
        });
    }
  },
  created() {
    this.fetchItems();
    console.log(this.datacollection.datasets);
  }
};
