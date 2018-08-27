<template>
    <section> 
        <b-table :data="data" :striped="isStriped" :hoverable="isHoverable" :loading="isLoading" :mobile-cards="hasMobileCards">

            <template slot-scope="props">
                <b-table-column field="id" label="ID" width="40" numeric>
                    {{ props.row.id }}
                </b-table-column>

                <b-table-column field="first_name" label="First Name">
                    {{ props.row.first_name }}
                </b-table-column>

                <b-table-column field="last_name" label="Last Name">
                    {{ props.row.last_name }}
                </b-table-column>

                <b-table-column field="date" label="Date" centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.date).toLocaleDateString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Gender">
                    <b-icon pack="fas" :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.gender }}
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon icon="emoticon-sad" size="is-large">
                            </b-icon>
                        </p>
                        <p>Nothing here.</p>
                    </div>
                </section>
            </template>
        </b-table>
    </section>
</template>

<script> 
export default {
    components: {
    },
    data() {
        let data = [
            { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016/10/15 13:43:27', 'gender': 'Male' },
            { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016/12/15 06:00:53', 'gender': 'Male' },
            { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016/04/26 06:26:28', 'gender': 'Female' },
            { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016/04/10 10:28:46', 'gender': 'Male' },
            { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016/12/06 14:38:38', 'gender': 'Female' }
        ]

        return {
            data, 
            isStriped: true, 
            isHoverable: true, 
            isLoading: false,
            hasMobileCards: true
        }
    },
    // data() {
    //     return {
    //         dashboardHeight: (window.innerHeight - (64 + 32 + 24 * 2)) + 'px',
    //         headers: [
    //             {
    //                 text: '报警名称',
    //                 align: 'left',
    //                 sortable: false,
    //                 value: 'name'
    //             },
    //             {
    //                 text: '报警内容',
    //                 align: 'left',
    //                 sortable: false,
    //                 value: 'content'
    //             },
    //             {
    //                 text: '报警时间',
    //                 align: 'left',
    //                 sortable: false,
    //                 value: 'time'
    //             }
    //         ],
    //         desserts: [
    //             {
    //                 name: '偏烧报警',
    //                 content: '10分钟回转窑区域报警',
    //                 time: '2018.08.10 12:10:10'
    //             },
    //             {
    //                 name: '偏烧报警',
    //                 content: '10分钟回转窑区域报警',
    //                 time: '2018.08.10 12:10:10'
    //             },
    //             {
    //                 name: '偏烧报警',
    //                 content: '10分钟回转窑区域报警',
    //                 time: '2018.08.10 12:10:10'
    //             }
    //         ]
    //     }
    // },
    computed: {
        // mainBindClass: function () {
        //     if (this.dasCard) {
        //         return {
        //             'sm8': true,
        //             'md10': true,
        //             'lg10': true,
        //         }
        //     } else {
        //         return {
        //             'sm8': true,
        //             'md10': true,
        //             'lg10': true,
        //             'offset-md1': true,
        //             'offset-lg1': true
        //         }
        //     }
        // },
    },
    mounted() {
        // let _this = this;
        // this.$globalEventHub.$on("clickDasCard", function (value) {
        //     _this.dasCard = !_this.dasCard;
        // });
    },
    methods: {

        // onResize() {
        //     console.log(123);
        // }
    }
}
</script>