/* 1. გამოაცხადეთ ორი ცვლადი , მიანიჭეთ მნიშვნელობები 87 და 65, 
დაბეჭდეთ (console.log()) ამ რიცხვების ჯამი*/
   let a=87, b=65 ;
   console.log(a+b);

   /* 2. გამოაცხადეთ ობიექტი student, ფროფერთებით: firstName, lastName, age, email, marks*/

let student = {
    "firstName": "cira",
    "lastName" : "janelidze",
         "age" : 37,
        "email": "janelidze.cira@gmail.com",
        "marks": 10 } ;

 /* 3. დაბეჭდეთ student ის სახელი*/
         console.log(student.firstName);

 /* 4. გამოაცხადეთ ორი ცვლადი m და n მნიშვნელობებით 45 და 23,
    დაბეჭდეთ მათი ჯამი თუ m მეტია n ზე , თუ არადა დაბეჭდეთ n.*/
         
             let m=45, n=23 ;
             if (m>n) {
             console.log(m+n);
             }else {
             console.log(n) ;
             } 

     /* 5. გამოაცხადეთ ცვლადი studentName და მიანიჭეთ მნიშვნელობად თქვენი სახელი. 
    დაბეჭდეთ “Rise and shine, “თქვენი სახელი” !” 
   ( მაგ თუ სახელი არის Irakli  უნდა დაიბეჭდოს Rise and shine, Irakli ! ) */

       let studentname = "cira !"
       console.log(" rise and shine, " + studentname );

 /* 6.გამოაცხადეთ ცვლადი bonus და salary ცვლადები, 
 salary -ს მიანიჭეთ სასურველი რიცხვითი მნიშვნელობა, დაწერეთ თუ ხელფასი არის 2000 ლარი ან მეტი 
 მაშინ ბონუსი არის 0, თუ ხელფასი 2000-ზე ნაკლებია მაშინ ბონუსი არის ხელფასის 10%. 
 დაბეჭდეთ ბონუსი (ჯერ bonus ცვლადს უნდა მიანიჭოთ შესაბამისი 
 მნიშვნელობა და შემდეგ დაბეჭდოთ bonus) */

 let salary=4000;
 let bonus;

if (salary<2000) {
 bonus = salary*10/100;
} else{
 bonus=0;
}
console.log(bonus);

     /* 7. გამოაცხადეთ ცვლადი d, k და h. სადაც d = 23, k=d-ნახევარი, 
     h= d-ს და k-ს ჯამი. დაბეჭდეთ h. (აქ პირობაში a,b,c შევცვალე ,რადგან ზემოთ ეს ცვლადები
     გამოცხადებული  და არ იმუშავა)*/

     let d= 23, k=d/2, h= d+k;
     console.log(h);

/* 8.გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ*/
   
     let phones = ["Iphone", "Samsung","Pixel", "Huawei","Xiaomi" ];
     console.log(phones);

/* 9.Phones მასივს ბოლოში დაამატეთ ახალი ელემენტი Motorola და დაბეჭდეთ მასივი.*/      
     phones.push("Motorola");
     console.log(phones);
/*  10.Დაბეჭდეთ რიცხვები 1 დან ( 1 შედის) 12-ის ჩათვლით.*/

      let i=1;
     for (i; i<=12; i++){
     console.log(i);
     }
