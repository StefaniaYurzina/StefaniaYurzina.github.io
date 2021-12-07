var files = <?php $out = array();
foreach (glob('img/*.jpg') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['filename'];
}
echo json_encode($out); ?>;









// var xhr = new XMLHttpRequest();
// xhr.open("GET", "/img", true);
// xhr.responseType = 'document';
// xhr.onload = () => {
//   if (xhr.status === 200) {
//     var elements = xhr.response.getElementsByTagName("a");
//     for (x of elements) {
//       if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
//           let img = document.createElement("img");
//           img.src = x.href;
//           document.querySelector('.div2').appendChild(img);
//       } 
//     };
//   } 
//   else {
//     alert('Request failed. Returned status of ' + xhr.status);
//   }
// }
// xhr.send()