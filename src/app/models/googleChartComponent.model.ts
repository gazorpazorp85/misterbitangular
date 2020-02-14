export default class GoogleChartComponent {

    constructor(
        public title: string = '',
        public type: string = 'AreaChart',
        public data: Array<Array<any>> = [[]],
        public columnNames: Array<string> = ['Month', 'Rate'],
        public options: any =
            {
                curveType: 'function',
                legend: { position: 'bottom', textStyle: { color: '#8bbabb' } },
                height: 500,
                width: 750,
                backgroundColor: '#464159',
                // chartArea: { backgroundColor: 'white' },
                colors: ['#8bbabb'],
                hAxis: { textStyle: { color: '#8bbabb' } },
                vAxis: { textStyle: { color: '#8bbabb' } },
                titleTextStyle: { color: '#8bbabb' }
            },
    ) { }
}