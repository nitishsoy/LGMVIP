function getData(a)
{
    url="https://reqres.in/api/users?page=1";
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
       console.log(data);
       var value=data;
           var img1=(value['data'][0]['avatar']);
           document.getElementById('p1').src = img1;
           var img2=(value['data'][1]['avatar']);
           document.getElementById('p2').src = img2;
           var img3=(value['data'][2]['avatar']);
           document.getElementById('p3').src = img3;
           var img3=(value['data'][3]['avatar']);
           document.getElementById('p4').src = img3;
           var img3=(value['data'][4]['avatar']);
           document.getElementById('p5').src = img3;
           var img3=(value['data'][5]['avatar']);
           document.getElementById('p6').src = img3;


          
           var first1=(value['data'][0]['first_name']);
           var last1=(value['data'][0]['last_name']);
           document.getElementById('n1').innerHTML =first1+" "+last1;
           var first1=(value['data'][1]['first_name']);
           var last1=(value['data'][1]['last_name']);
           document.getElementById('n2').innerHTML =first1+" "+last1;
           var first1=(value['data'][2]['first_name']);
           var last1=(value['data'][2]['last_name']);
           document.getElementById('n3').innerHTML =first1+" "+last1;
           var first1=(value['data'][3]['first_name']);
           var last1=(value['data'][3]['last_name']);
           document.getElementById('n4').innerHTML =first1+" "+last1;
           var first1=(value['data'][4]['first_name']);
           var last1=(value['data'][4]['last_name']);
           document.getElementById('n5').innerHTML =first1+" "+last1;
           var first1=(value['data'][5]['first_name']);
           var last1=(value['data'][5]['last_name']);
           document.getElementById('n6').innerHTML =first1+" "+last1;




      var mail1=(value['data'][0]['email']);
           document.getElementById('m1').innerHTML=mail1;
           var mail2=(value['data'][1]['email']);
           document.getElementById('m2').innerHTML=mail2;
           var mail3=(value['data'][2]['email']);
           document.getElementById('m3').innerHTML=mail3;
           var mail3=(value['data'][3]['email']);
           document.getElementById('m4').innerHTML=mail3;
           var mail3=(value['data'][4]['email']);
           document.getElementById('m5').innerHTML=mail3;
           var mail3=(value['data'][5]['email']);
           document.getElementById('m6').innerHTML=mail3;




        })
}
