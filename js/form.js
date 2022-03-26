let button = document.querySelector('.submit-button');
let output = document.querySelector('.output');
let firstname = document.querySelector('.firstname');
let lastname = document.querySelector('.lastname');
let p_address = document.querySelector('.p_address');
let c_address = document.querySelector('.c_address');
let fname = document.querySelector('.fname');
let mname = document.querySelector('.mname');
let gender = document.querySelector('.gender');
let village = document.querySelector('.village');
let ward = document.querySelector('.ward');
let upazilla = document.querySelector('.upazilla');
let zilla = document.querySelector('.zilla');
let division = document.querySelector('.division');
let cont_num = document.querySelector('.cont_num');
let dob = document.querySelector('.dob');
let bc_num = document.querySelector('.bc_num');

button.addEventListener('click', handleSubmit);

function handleSubmit(e){
    e.preventDefault();

    const outputHTML = getOutputHTML(firstname.value,
        lastname.value,
        p_address.value,
        c_address.value,
        gender.value,
        ward.value,
        village.value,
        upazilla.value,
        zilla.value,
        division.value,
        fname.value,
        mname.value,
        cont_num.value,
        dob.value,
        bc_num.value)
    // console.log('tiplo', item.value);
    // const test = `<div>${item.value}</div>`
    // output.innerHTML = outputHTML;
    // console.log('sfbdh')
    let  newWin = window.open('', '', 'height=750,width=650');
    newWin.document.write(outputHTML);
    newWin.print();
    newWin.close();
}

function getOutputHTML(firstname, lastname, p_address, c_address, gender, ward, village, upazilla, zilla, division, fname, mname, cont_num, dob, bc_num) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .output 
        {
            border: 2px solid blue;
            height: 700px;
            width: 600px;
            margin: auto;
        }
        .bc-header
        {
            text-align: center;
            font-size: 50px;
            margin: 15px 15px 30px;
            border-bottom: 1px solid black;
        }
        .info-type
        {
            font-weight: bold;
            margin-top: 50px;
        }
        .info-type, .info
        {
            font-size: 20px;
        }
        .topic
        {
            margin-top: 15px;
            margin-left: 10px;
        }
        .signature 
        {
            font-size: 20px;
            text-align: right;
            margin-top: 50px;
            font-weight: bold;
        }
        .chairman
        {
            border-top: 1px solid black;
            width: 300px;
            margin: 10px;
        }
    </style>
</head>
<body>
<div class="output">
        <div class="bc-header">
            Birth Certificate
        </div>
        <div class="fullname topic">
            <span class="info-type">
                Full Name:
            </span>
            <span class="info">
                ${firstname + ' ' + lastname}
            </span>
        </div>
        <div class="fname topic">
            <span class="info-type">
                Father's Name:
            </span>
            <span class="info">
                ${fname}
            </span>
        </div>
        <div class="mname topic">
            <span class="info-type">
                Mother's Name:
            </span>
            <span class="info">
                ${mname}
            </span>
        </div>

        
        <div class="gender topic">
            <span class="info-type">
                Gender:
            </span>
            <span class="info">
                ${gender}
            </span>
        </div>

        <div class="p_address topic">
            <span class="info-type">
                Permanent Address:
            </span>
            <span class="info">
                ${p_address}
            </span>
        </div>

        <div class="c_address topic">
            <span class="info-type">
                Current Address:
            </span>
            <span class="info">
                ${c_address}
            </span>
        </div>
        

        <div class="ward topic">
            <span class="info-type">
                Ward:
            </span>
            <span class="info">
                ${ward}
            </span>
        </div>

        
        <div class="village topic">
            <span class="info-type">
                Village:
            </span>
            <span class="info">
                ${village}
            </span>
        </div>
        
        <div class="upazilla topic">
            <span class="info-type">
                Upazilla:
            </span>
            <span class="info">
                ${upazilla}
            </span>
        </div>

        
        <div class="zilla topic">
            <span class="info-type">
                Zilla:
            </span>
            <span class="info">
                ${zilla}
            </span>
        </div>

        
        <div class="division topic">
            <span class="info-type">
                Division:
            </span>
            <span class="info">
                ${division}
            </span>
        </div>

        <div class="cont_num topic">
            <span class="info-type">
                Contact Number:
            </span>
            <span class="info">
                ${cont_num}
            </span>
        </div>
        
        <div class="dob topic">
            <span class="info-type">
                Date of Birth:
            </span>
            <span class="info">
                ${dob}
            </span>
        </div>
        
        <div class="bc_num topic">
            <span class="info-type">
                Birth Certificate Number:
            </span>
            <span class="info">
                ${bc_num}
            </span>
        </div>

        <div class="signature">
            <span class="chairman">
                Chairman's Signature
            </span>
        </div>
    </div>
    <!-- <script src="js/form.js"></script> -->
</body>
</html>
    `
}
