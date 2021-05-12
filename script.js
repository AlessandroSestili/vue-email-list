const app = new Vue({
    el: "#app",
    data: {
        emailsList: [],
        times: 10,
        showLoadSpinner: false,
        showButton: true,
    },
    methods: {
        getEmail() {
            this.showButton = false;
            this.showLoadSpinner = true;

            const List = [];

            for (let i = 0; i < this.times; i++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {

                        List.push(resp.data.response);

                        if (List.length === this.times) {
                            this.emailsList = List;
                            this.showLoadSpinner = false;
                        };

                    });

            };

        },

    },
});