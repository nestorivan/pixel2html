const pricing = () => {
  let plans = document.getElementsByClassName('pricing__plan');

  for (const plan of plans) {
    plan.addEventListener('mouseover', (e) => {
      const container = e.currentTarget;
      let buttons = container.getElementsByClassName('btn');
      let plans = container.getElementsByClassName('pricing__plan-name');
      let listItems = container.getElementsByClassName('disabled');

      container.style.color = 'white !important';

      for (let button of buttons) {
        button
          .classList
          .remove('btn--outline');
        button
          .classList
          .add('btn--green');
      };

      for (let plan of plans) {
        plan
          .classList
          .remove('text--link');
        plan
          .classList
          .add('text--white');
      }

      for (let listItem of listItems) {
        listItem.style.color = 'white '
      }
    })

    plan.addEventListener('mouseleave', (e) => {
      const container = e.currentTarget;
      let buttons = container.getElementsByClassName('btn');
      let plans = container.getElementsByClassName('pricing__plan-name');
      let listItems = container.getElementsByClassName('disabled');

      container.style.color = 'initial !important';

      for (let button of buttons) {
        button
          .classList
          .remove('btn--green');
        button
          .classList
          .add('btn--outline')
      }

      for (let plan of plans) {
        plan
          .classList
          .remove('text--white');
        plan
          .classList
          .add('text--link');
      }

      for (let listItem of listItems) {
        listItem.style.color = 'initial'
      }
    })
  }
}

export default pricing;
