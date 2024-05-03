// set the range series data
var rangeData = [
    {
        name: "TASK 1",
        start: "2020/01/01 22:43",
        end: "2023/09/01",
        fill: "#FF00E6 0.5",
        stroke: "#1c4598"
    },
    {
        name: "TASK 2",
        start: "2021/06/28",
        end: "2022/03/13",
        fill: "#00FF33 0.5",
        stroke: "#1c4598"
    },
    {
        name: "TASK 3",
        start: "2022/03/14",
        end: "2024/06/28",
        fill: "#FF0000 0.6",
        stroke: "#1c4598"
    }
];
// set the moment series data
var momentData = [
    [Date.UTC(2020, 6, 29), "Task 1 için gerekli çalışma başlatıldı"],
    [Date.UTC(2020, 10, 29), "çalışmalarda toplantılar yapıldı"],
    [Date.UTC(2020, 12, 11), "düzenlemeler yapıldı devam ediyor"],
    [Date.UTC(2021, 7, 1), "Task 2 için planlama yapıldı"],
    [Date.UTC(2021, 2, 21), "tasarım aşamasından geçti"],
    [Date.UTC(2021, 11, 6), "tasarım aşaması onaya girdi"],
    [Date.UTC(2022, 2, 2), "tasarımın sonuna yaklaştı"],
    [Date.UTC(2022, 7, 8), "toplantı yapıldı"],
    [Date.UTC(2023, 4, 13), "yazılım geliştirmeleri başlangıcı"],
    [Date.UTC(2023, 7, 8), "birim testleri uygulanması"],
    [Date.UTC(2023, 11, 6), "gerekli bileşenler hazırlandı"],
    [Date.UTC(2024, 6, 28), "İş tamamlandı"]
];
var spiritMoments = [
    [x = Date.UTC(2020, 1, 6), y = 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'],
    [x = Date.UTC(2021, 2, 9), y = '1914 translation by H. Rackham'],
    [x = Date.UTC(2023, 4, 1), y = 'Stuck in the sand trap']
];
var oppyMoments = [
    [Date.UTC(2024, 1, 17), 'Section546hgf 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC'],
    [Date.UTC(2023, 0, 14), '1914 translation by H. Rackham'],
    [Date.UTC(2021, 8, 26), 'The standard Lorem Ipsum passage, used since the 1500s'],
    [Date.UTC(2020, 9, 10), 'Found vulcanic rock'],
    [Date.UTC(2021, 6, 28), 'Drove more than 40 kilometers'],
    [Date.UTC(2022, 5, 1), 'Got caught in global sand storm']
];
var curiosityMoments = [
    [Date.UTC(2024, 7, 22), 'Started driving'],
    [Date.UTC(2023, 8, 1), 'Reached Mount Sharp'],
    [Date.UTC(2020, 10, 26), 'Spotted shiny object']
];
var currentdate = new Date();
// create a timeline chart
var chart = anychart.timeline();
var newTask = {
    name: "",
    start: "",
    end: "",
    fill: "",
    stroke: "#1c4598"
};

var noteDate = '';
var noteDescription = ''
anychart.onDocumentReady(function () {
    anyChart();
    $('#inpdescriptiontask').on('input', function (e) {
        if ($("#inpdescriptiontask").val().length > 100) {
            console.log(e)
        }
        $("#characternumbertask").text(100 - $("#inpdescriptiontask").val().length);
        newTask.name = $("#inpdescriptiontask").val();
    });
    $('#inpdescriptionnote').on('input', function (e) {
        if ($("#inpdescriptionnote").val().length > 100) {
            console.log(e)
        }
        $("#characternumbernote").text(100 - $("#inpdescriptionnote").val().length);
        noteDescription = $("#inpdescriptionnote").val();
    });
    $.datetimepicker.setDateFormatter('moment');
    $('#inpstartdatetask').datetimepicker(
        {
            onChangeDateTime: function (dp, $input) {
                newTask.start = $input.val();
            }
        }
    );
    $('#inpenddatetask').datetimepicker(
        {
            onChangeDateTime: function (dp, $input) {
                newTask.end = $input.val();
            }
        }
    );
    $('#inpdatenote').datetimepicker(
        {
            onChangeDateTime: function (dp, $input) {
                noteDate = $input.val();
            }
        }
    );
    $('#inpcolor').on('propertychange input', function (e) {
        newTask.fill = $("#inpcolor").val() + " 0.5";
    });

    $('#btnapplytask').on('click', function (e) {
        if (newTask.name == '' || newTask.start == '' || newTask.end == '') {
            alert("Name,start date,end date is required.");
            return;
        }
        var startDateType = new Date(newTask.start);
        var endDateType = new Date(newTask.end);
        if (endDateType < startDateType) {
            alert("End date cannot be less than the start date");
            return;
        }
        anyChartClear();
        anyChartAddDataTask();
        anyChart();
    });

    $('#btnapplynote').on('click', function (e) {
        if (noteDescription == '' || noteDate == '') {
            alert("Description, date is required.");
            return;
        }
        anyChartClear();
        var selectorPoint = $("#inpslctmarkernote option:selected").val();
        anyChartAddDataNote(noteDescription, noteDate, selectorPoint);
        anyChart();
    });
});

var anyChart = function () {
    // configure the axis
    chart.axis().height(30);
    chart.axis().stroke("#004e72");
    //#region create a range series
    let rangeSeries = chart.range(rangeData).height(30);
    // configure the range series label settings
    rangeSeries
        .labels()
        .useHtml(true)
        .fontColor("#fff")
        .format('{%name}<br><span style="font-size: 85%">{%start}{dateTimeFormat:dd MMMM YYYY}–{%end}{dateTimeFormat:dd MMMM YYYY}</span>');

    // format the range series tooltip
    let rangeTooltipFormat = `<span style='font-weight:600;font-size:10pt'>
        {%name}</span><br><br>From
        {%start}{dateTimeFormat:dd MMMM YYYY} to
        {%end}{dateTimeFormat:dd MMMM YYYY}`;
    rangeSeries.tooltip().useHtml(true);
    rangeSeries.tooltip().format(rangeTooltipFormat);
    rangeSeries.tooltip().title().enabled(false);
    rangeSeries.tooltip().separator().enabled(false);
    //#endregion end-RANGES

    //#region create a moment series
    let momentSeries = chart.moment(momentData);
    // customize the moment series marker
    momentSeries.markers().type("triangle-right");
    momentSeries.normal().markers().size(6);
    momentSeries.hovered().markers().size(6);
    momentSeries.selected().markers().size(6);
    momentSeries.normal().markers().fill("#dd2c00");
    momentSeries.hovered().markers().fill("#dd2c00");
    momentSeries.selected().markers().fill("#004e72");
    momentSeries.normal().markers().stroke("#dd2c00", 1);
    momentSeries.hovered().markers().stroke("#dd2c00", 2);
    momentSeries.selected().markers().stroke("#004e72", 2);
    momentSeries.tooltip().useHtml(true);
    momentSeries.tooltip().format(`<span style='font-weight:600;font-size:10pt'>{%y}</span><br>`);

    var spiritMomentsSeries = chart.moment(spiritMoments);
    // customize the moment series marker
    spiritMomentsSeries.markers().type("star5");
    spiritMomentsSeries.normal().markers().size(6);
    spiritMomentsSeries.hovered().markers().size(6);
    spiritMomentsSeries.selected().markers().size(6);
    spiritMomentsSeries.normal().markers().fill("#FF0000").stroke("#e9ae0b");
    spiritMomentsSeries.tooltip().useHtml(true);
    spiritMomentsSeries.tooltip().format(`<span style='font-weight:600;font-size:10pt'>{%y}</span><br>`);

    var oppyMomentsSeries = chart.moment(oppyMoments);
    // customize the moment series marker
    oppyMomentsSeries.markers().type("diagonal-cross");
    oppyMomentsSeries.normal().markers().size(6);
    oppyMomentsSeries.hovered().markers().size(6);
    oppyMomentsSeries.selected().markers().size(6);
    oppyMomentsSeries.normal().markers().fill("#00FF00").stroke("#e9ae0b");
    oppyMomentsSeries.tooltip().useHtml(true);
    oppyMomentsSeries.tooltip().format(`<span style='font-weight:600;font-size:10pt'>{%y}</span><br>`);

    var curiosityMomentsSeries = chart.moment(curiosityMoments);
    // customize the moment series marker
    curiosityMomentsSeries.markers().type("arrow-right");
    curiosityMomentsSeries.normal().markers().size(15);
    curiosityMomentsSeries.hovered().markers().size(15);
    curiosityMomentsSeries.selected().markers().size(15);
    curiosityMomentsSeries.normal().markers().fill("#0000FF").stroke("#e9ae0b");
    curiosityMomentsSeries.tooltip().useHtml(true);
    curiosityMomentsSeries.tooltip().format(`<span style='font-weight:600;font-size:10pt'>{%y}</span><br>`);

    //#endregion end-MOMENT
    // set the chart title
    chart
        .title()
        .enabled(true)
        .useHtml(true)
        .text('');

    // enable the scroller
    //chart.scroller().enabled(true);

    // create and configure a today marker
    var todayMarker = chart.todayMarker();
    todayMarker.stroke("#dd2c00", 1);

    //Onload Date
    let year = currentdate.getFullYear();
    let month = (currentdate.getMonth());
    let day = currentdate.getDate();
    let hour = currentdate.getHours();
    let minutes = currentdate.getMinutes();
    let seconds = currentdate.getSeconds();

    chart.zoomTo(Date.UTC(year, month, day), Date.UTC(year, month, day + 1));

    // set the chart container id
    chart.container("container");

    // draw the chart
    chart.draw();
}

var anyChartClear = function () {
    momentData.splice(0, momentData.length);
    oppyMoments.splice(0, oppyMoments.length);
    spiritMoments.splice(0, spiritMoments.length);
    curiosityMoments.splice(0, curiosityMoments.length);
    rangeData.splice(0, rangeData.length);
}


var anyChartAddDataTask = function () {
    rangeData.push(newTask);
}

var anyChartAddDataNote = function (noteDescription, noteDate, selectorPoint) {
    console.log(selectorPoint);
    if (selectorPoint == 0) {
        alert('Pointer is required.');
        return;
    }
    if (selectorPoint == 1) {
        momentData.push([noteDate, noteDescription]);
    }
    if (selectorPoint == 2) {
        spiritMoments.push([noteDate, noteDescription]);
    }
    if (selectorPoint == 3) {
        oppyMoments.push([noteDate, noteDescription]);
    }
    if (selectorPoint == 4) {
        curiosityMoments.push([noteDate, noteDescription]);
    }

}
