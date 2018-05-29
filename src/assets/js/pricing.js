const pricing = () => {
  let plans = document.getElementsByClassName('pricing__plan');

  for (const plan of plans) {
    plan.addEventListener('mouseover', (e) => {
      console.log(e);
      let buttons = e.currentTarget.getElementsByClassName('btn');
      for (const button of buttons) {
        button.classList.remove('btn--outline');
        button.classList.add('btn--green');
      }
    })

    plan.addEventListener('mouseleave', (e) => {
      let buttons = e.currentTarget.getElementsByClassName('btn');
      for (const button of buttons) {
        button.classList.remove('btn--green');
        button.classList.add('btn--outline')
      }
    })
  }
}

export default pricing;
