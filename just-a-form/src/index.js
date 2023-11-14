import './global.css'

import { rulesForFirstName, rulesForLastName, rulesForBirthday, rulesForEmail } from 'rules.js'

const view = {
  get form() { return document.querySelector('body > form') },
  get firstName() { return this.form.querySelector('input[name=firstName]') },
  get lastName() { return this.form.querySelector('input[name=lastName]') },
  get birthday() { return this.form.querySelector('input[name=birthday]') },
  get email() { return this.form.querySelector('input[name=email]') },
  get password() { return this.form.querySelector('input[name=password]') },
  get password_confirmation() { return this.form.querySelector('input[name=password_confirmation]') },
  get submit() { return this.form.querySelector('button[type=submit]') }
}

const controller = {
  launch: function () {
    view.form.addEventListener(
      'input', (event) => event.target.setCustomValidity('')
    );
    view.form.addEventListener(
      'input', (event) => {
        for (const field of [view.firstName, view.lastName, view.birthday, view.email, view.password, view.password_confirmation]) {
          if (!field.value) {
            view.submit.disabled = true; return
          }
        }
        view.submit.disabled = false
      }
    )
    view.submit.addEventListener('click', event => event.preventDefault())
    view.submit.addEventListener(
      'click', (event) => {
        const hasProblem = [
          this.avoids.call(view.firstName, rulesForFirstName),
          this.avoids.call(view.lastName, rulesForLastName),
          this.avoids.call(view.birthday, rulesForBirthday),
          this.avoids.call(view.email, rulesForEmail),
          this.avoids.call(view.password, rulesForPassword),
        ].some(boolean => boolean === false)
        if (hasProblem) {
          view.form.noValidate = false
          view.form.reportValidity()
        }
        else {
          view.form.submit()
        }
      }
    )
  },
  /**
    * @param   {any[]} conditions
    * @returns {boolean}
  */
  avoids: function (conditions) {
    const checks = []
    for (let i = 0; i < conditions.length; ++i) {
      if (conditions[i].args) {
        checks.push(
          conditions[i].rule.apply(
            null,
            conditions[i].args
              .concat(this.value)
              .reverse()
          )
        );
      }
      else {
        checks.push(
          conditions[i].rule.apply(null, [this.value])
        )
      }
      if (checks.includes(true)) {
        this.setCustomValidity(conditions[i].description)
        break
      }
    }
    return checks.every(check => check === false)
  }
}

window.addEventListener('load', controller.launch.bind(controller))
