/*ex1*/
document.write("hello world")
console.log("hello world")
/*end ex1*/
/*ex2 (fama input fil html)*/
document.querySelector("input").value = "bravo oufe il ex ya ghali"
/*end ex2*/
/*ex3*/
let a = "1"
let b = "2"
let c = a + b
console.log(typeof a)
console.log("a=", a)
console.log(typeof b)
console.log("b=", b)
console.log(typeof c)
console.log("c=", c)
/*mahabouch yikhdmou 
Number(a);
parseInt(b);
console.log (typeof a)
console.log(typeof b)
*/
/*faza masnou3a min 3andi inchallah takhtaf*/
a = a * 1
console.log(typeof a)
b = b * 1
console.log(typeof b)
c = a + b
console.log(typeof c)
console.log("a=", a)
console.log("b=", b)
console.log("c=", c)
/*khidmt/end ex3*/
/*ex4*/
function allSum() {
  let i = 0
  let sum = 0
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
let d = 52
let u = 42
let o = 10
let x = 42
document.writeln(allSum(d, u, o, x))
/*end of ex4*/
/*ex5 + form fil html */


function verif() {
  let pr = vtf.value;

  let pattern   = /^\d+$/;
  if (pattern.test(pr)) {
    pr = parseInt(pr)
    n++

    if (pr < vt) {
      document.getElementById('resultat').innerHTML = "the number that needs to be found is bigger";
      vtf.value = '';
      vtf.focus();
    } else if (pr > vt) {
      document.getElementById('resultat').innerHTML = "the number that need to be found  is smaller";
      vtf.value = ''
      vtf.focus();
    } else{
      document.getElementById('resultat').innerHTML = "well done, the number was found in " + n + " trys"
    }
  } else {
    document.getElementById('resultat').innerHTML = "write a number for god sake dude";
  }
  return false;
}
var maxValue = 102;
var vt = Math.floor((Math.random() * maxValue) + 1);
var n = 0;
var vtf = document.getElementById('vtf');

if (vt > maxValue) {
  vt = maxValue;
}
document.getElementById('maxValue').innerHTML = maxValue;
vtf.value = '';
vtf.focus();
/*oufe il ex5*/
/* ex6 mafhmtouch ama ou ena na3mel fi recherche il9it khidmtou hhhh ama bon hata bil khidma mafhimtouch 
Number.prototype.formatMoney = function (c, d, t) {
  var n = this,
          c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d === undefined ? "." : d,
          t = t === undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}; // Source: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
 
function ElementReader() {
  this.InputCheckbox = function (idInput) {
    var input = document.getElementById(idInput);
    if (input === null) {
      return undefined;
    }
    return input.checked;
  };
  this.InputInt = function (idInput) {
    var input = document.getElementById(idInput);
    if (input === null) {
      return undefined;
    }
    return parseInt(input.value);
  };
  this.Select = function (idSelect) {
    var select = document.getElementById(idSelect);
    if (select === null) {
      return undefined;
    }
    var idx = select.selectedIndex;
    return select.options[idx].value;
  };
}
 
function ElementWriter() {
  this.Tag = function (idTag, value) {
    var tag = document.getElementById(idTag);
    if (tag !== null) {
      tag.innerHTML = value;
    }
  };
  this.TagCurrency = function (idTag, value) {
    this.Tag(idTag, value.formatMoney(2, ',', '&nbsp;') + '$');
  };
}
 
function salaryCalculator() {
  var incomeTaxRate = 0.18;
  var employmentInsuranceRate = 0.07;
  var canadaPensionPlanRate = 0.05;
  var additionBonusValue = 100;
  var additionAllowanceValue = 150;
  this.grossSalary;
  this.additionBonus;
  this.additionAllowance;
  this.gender;
  this.dependents;
  this.getAdditions = function () {
    var additions = 0;
    if (this.additionBonus === true) {
      additions += additionBonusValue;
    }
    if (this.additionAllowance === true) {
      additions += additionAllowanceValue;
    }
    return additions;
  };
  this.getCanadaPensionPlan = function () {
    return this.grossSalary * canadaPensionPlanRate;
  };
  this.getEmploymentInsurance = function () {
    return this.grossSalary * employmentInsuranceRate;
  };
  this.getFinalSalary = function () {
    return this.grossSalary - this.getCanadaPensionPlan() - this.getEmploymentInsurance() - this.getIncomeTax() + this.getAdditions();
  };
  this.getIncomeTax = function () {
    var relevantIncomeTaxRate = incomeTaxRate;
    if (this.gender === 'F') {
      relevantIncomeTaxRate -= 0.02;
    }
    if (this.dependents === 3) {
      relevantIncomeTaxRate -= 0.01;
    } else if (this.dependents > 3) {
      relevantIncomeTaxRate -= 0.02;
    }
    return this.grossSalary * relevantIncomeTaxRate;
  };
}
 
function computeSalary() {
  var reader = new ElementReader();
  var writer = new ElementWriter();
  var salCalc = new salaryCalculator();
  salCalc.grossSalary = reader.InputInt('grossSalary');
  salCalc.additionBonus = reader.InputCheckbox('additionBonus');
  salCalc.additionAllowance = reader.InputCheckbox('additionAllowance');
  salCalc.gender = reader.Select('gender');
  salCalc.dependents = reader.InputInt('dependents');
  writer.TagCurrency('incomeTaxResult', salCalc.getIncomeTax());
  writer.TagCurrency('employmentInsuranceResult', salCalc.getEmploymentInsurance());
  writer.TagCurrency('canadaPensionPlanResult', salCalc.getCanadaPensionPlan());
  writer.TagCurrency('additionsResult', salCalc.getAdditions());
  writer.TagCurrency('finalSalaryResult', salCalc.getFinalSalary());
}
 
function resetAll() {
  var writer = new ElementWriter();
  var results = ['incomeTaxResult', 'employmentInsuranceResult', 'canadaPensionPlanResult', 'additionsResult', 'finalSalaryResult'];
  for (var i = 0; i < results.length; i++) {
    writer.Tag(results[i], '');
  }
}*/