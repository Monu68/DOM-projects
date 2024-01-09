const body = document.querySelector('body')
body.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('.height').value);
    const weight = parseInt(document.querySelector('.weight').value);
    const results = document.querySelector('#results');
    const feedback = document.querySelector('#feedback')
    const print = document.querySelector('#print')

    if((height === '' || height<=0 || isNaN(height)) && (weight === '' || weight<=0 || isNaN(weight))){
        results.innerHTML = 'Please enter a valid height and weight'
    }else if(height === '' || height<=0 || isNaN(height)){
        results.innerHTML = 'Please enter a valid height!'
    }else if(weight === '' || weight<=0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight!'
    } 
    else{
        const result = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `Your BMI is: ${result}`;
        print.innerHTML = 'Feedback:'

        if(result < 18.6){
            feedback.innerHTML = 'You are underweight. Please consult a nutritionist.'
        }else if(result >= 18.6 && result < 24.9){
            feedback.innerHTML = 'You have a normal weight. Keep up the good work.'
        }else{
            feedback.innerHTML = 'You are obese. Consult a healthcare professional for advice.'
        }
    } 
})