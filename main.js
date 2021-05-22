var images = 
["https://s1.qwant.com/thumbr/0x380/0/2/236bcc8336e178773bd0b2e73bf9d878d8091463e001b063218661ddbc563e/mom-holding-baby-cartoon-vector-19046494.jpg?u=https%3A%2F%2Fcdn5.vectorstock.com%2Fi%2F1000x1000%2F64%2F94%2Fmom-holding-baby-cartoon-vector-19046494.jpg&q=0&b=1&p=0&a=0",
"https://s1.qwant.com/thumbr/0x380/1/f/b028e19e87b0b5bf197789e21fd032093c2359c2ba3bc5b924d85d5e42401d/86597-royaltyfree-man-drawing-cartoon-free-photo-png.png?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fbusiness%2F86597-royaltyfree-man-drawing-cartoon-free-photo-png.png&q=0&b=1&p=0&a=0",
"https://s2.qwant.com/thumbr/0x380/d/c/c45c4d9f2f2bf14e09f41269b4f5af86c7c0fe8e9f269c9df276e89d74c0bd/teen-girl-clipart-transparent-backround-7.jpg?u=https%3A%2F%2Fclipartart.com%2Fimages%2Fteen-girl-clipart-transparent-backround-7.jpg&q=0&b=1&p=0&a=0",
"https://s1.qwant.com/thumbr/0x0/3/7/622a53ca854befc103d262280454708cf61752309f3aada2a826fe3309142b/reading-magazine-illustration-id164538862.jpg?u=https%3A%2F%2Fmedia.istockphoto.com%2Fillustrations%2Freading-magazine-illustration-id164538862%3Fk%3D6%26m%3D164538862%26s%3D612x612%26w%3D0%26h%3DVmvACUW7PiGoPawqtT_anOeyzs4Uo0Tv-ysHABqTX8c%3D&q=0&b=1&p=0&a=0"
];

var names = 
[
    "mom","Dad","Sister","Me"
];

 var i = 0

function update()
{
  i++;
  var numbers_of_family_member_in_array = 4
  if(i > numbers_of_family_member_in_array)
   {
     i = 0;
   }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_img").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}