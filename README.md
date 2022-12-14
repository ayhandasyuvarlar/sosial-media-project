# Sosial-Media

- Material UI: https://mui.com/material-ui/getting-s...
- Redux Toolkit: https://redux-toolkit.js.org/introduc...
- React Router: https://reactrouter.com/en/v6.3.0/get...
- Redux Persist: https://github.com/rt2zz/redux-persist
- React Dropzone: https://react-dropzone.js.org/
- Node: https://nodejs.org/en/download/
- NPX: https://www.npmjs.com/package/npx
- Google Fonts: https://fonts.google.com/
- Formik: https://formik.org/docs/overview
- Yup: https://github.com/jquense/yup

## Redux Persist 

### Redux kullandığımız uygulamalarda, sayfa değiştiğinde, yenilendiğinde veya uygulama kapatıp tekrar açıldığında, redux’ taki değişkenlerin tekrar eski haline dönmesi veya sıfırlanması sebebiyle tekrar kullanmak istediğimizde ulaşamayız. Bu yüzden sayfa yenilendiğinde tekrar istek atar ve değişkenleri tekrar setleriz. Özellikle genelde servisten gelen sabit objeler veya arraylerde bu can sıkıcı hale gelir çünkü tekrar servise istek atıp değişkeni tekrar setlemek gerekir.

### Redux persist, redux’taki değişkenlerin, sayfa yenilendiğinde, değiştiğinde veya uygulama kapatıp tekrar açıldığında tekrar eski haline dönmesini veya sıfırlanmasını engellemeye yarayan, bu değişkenleri localstorage da saklayan bir pakettir.

### Bir örnekle anlatmak gerekirse; Login sayfamızı reducera yazdığımız loginState adında boolean bir değişkene bağladığımızı düşünelim.

## redux persist Bu değişken true olduğunda login sayfası, eğer false ise dashboard sayfası gözükecektir.

### Redux persist kullanmadığımızda sayfa her yenilendiğinde reducer sıfırlanacak, loginState eski haline dönecek yani true olacak ve login sayfası tekrar gözükecektir. Daha önceden login olduğumuz halde tekrar login ekranı önümüze gelecektir.

### Ancak redux persist kullanıldığında böyle bir durum yaşanmayacak loginState i true ya setlemediğimiz sürece login sayfası gözükmeyecektir.

