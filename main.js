const Button = document.querySelector('.Button')
const DisplayImg = document.querySelector('img')
const State = document.querySelector('#inputState')
const StateButton = document.querySelector('.StateButton')
const tempa = document.querySelector('.temperature')
const breez = document.querySelector('.wind')
const des = document.querySelector('.description')




function GetImage (){
    console.log('hello world')
    fetch('https://dog.ceo/api/breeds/image/random')

    .then(function (Response) {
        console.log(Response)
        return Response.json();
      })

      .then(function (data) {
        console.log('Step 3: HTTP body data parsed');
        console.log(data);
        console.log(data.message);
        let img = data.message
        console.log('this will be the img that i use ', img)
        DisplayImg.src = data.message

      });

}

Button.addEventListener('click', GetImage)


function GetWether (){
    const link = 'https://goweather.herokuapp.com/weather' + '/' + State.value
    console.log('this is the link', link)
    fetch(link )

    .then(function (Response) {
        console.log(Response)
        return Response.json();
      })

      .then(function (data) {
        console.log('Step 3: HTTP body data parsed');
        console.log(data);
        let weather = data.message
        let temp = data.temperature
        let wind = data.wind
        let dis = data. description
        console.log ('THIS IS THE TEMP', temp)

        breez.innerText = wind
        tempa.innerText = temp
        des.innerText = dis




        



      });


}

StateButton.addEventListener('click', GetWether)
