var images = ["IMG-20230712-WA0012.jpg","IMG_20230729_162015.jpg","IMG_20230729_162033.jpg", "https://media.licdn.com/dms/image/C5103AQGBQD7fIkGpKg/profile-displayphoto-shrink_800_800/0/1583924976582?e=2147483647&v=beta&t=4rh-7svOHx2446mlrj9D8ucw1xKxJ55g0mfifQXiPF0" , "IMG_20230422_090821.jpg", "IMG-20221021-WA0040 (2).jpg", "deepesh.1.jpg"];
var names = ["family photo","Bommisetty Satya narayana Murthi", "Bommisetty RajaLakshhmi", "bommisetty Giridhar", "Bommisetty Kavya Haritha", "bommisetty kathikeya","bommisetty deeepesh"];
var i = 0;
function update()
{
  var numbers_of_family_member_in_array = 7
  document.getElementById("family_member_image").src = images[i];
  document.getElementById("family_member_name").innerHTML = names[i];
    i++;
  
    if(i == numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    // //Debug the code to store list of images in updatedImage. Use images[i]
    // var updatedImage = [images];
    // //Debug the code to store list of names in updatedName. Use names[i]
    // var updatedName = [names] ;
 
   
    }