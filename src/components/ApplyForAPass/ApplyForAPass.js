import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../UI/Input';
import is from 'is_js';
import RadioButton from '../UI/RadioButton';
import Button from '../UI/Button';
import axios from 'axios';
import { storage } from '../../firebase';
import ImageUploader from '../ImageUploader';
import Guest from '../PassTemplates/Guest';
import { changePassType, inputsChange, resetPass } from '../../store/actions/pass';
import Employee from '../PassTemplates/Employee';

const defaultControl = {
  value: '',
  errorMessage: [],
  touched: false,
  valid: false,
  shouldValidate: true,
  type: 'text',
};

function createFormControls() {
  return {
    name: {
      ...defaultControl,
      type: 'name',
      label: 'ФИО *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    email: {
      ...defaultControl,
      label: 'Email *',
      type: 'email',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
        email: { active: true, errorMessage: 'Некорректно введен E-mail' },
      },
    },
    phoneNumber: {
      ...defaultControl,
      label: 'Номер телефона (с привязкой телеграма) *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
        phone: { active: true, errorMessage: 'Введите номер телефона' },
      },
    },
    socialMedia: {
      ...defaultControl,
      label: 'Ссылка на страницу в любимой соцсети',
      validation: {},
    },
    location: {
      ...defaultControl,
      label: 'Где ты живёшь (край/область, населённый пункт)?',
      validation: {},
    },
    interests: {
      ...defaultControl,
      label: 'Чем ты занимаешься (сфера деятельности, профессия, направление учёбы)? *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    experience: {
      ...defaultControl,
      label: 'Опиши свой походный опыт. *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    travelExperience: {
      ...defaultControl,
      label: 'Какую самую дальнюю точку РФ ты посетил? *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    travelExperience: {
      ...defaultControl,
      label: 'Какую самую дальнюю точку РФ ты посетил? *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    yourCriteries: {
      ...defaultControl,
      label: 'По каким критериям ты выбираешь волонтёрские проекты?*',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    degree: {
      ...defaultControl,
      label: 'Расскажи, пожалуйста, чем ты руководствовался при выборе ВУЗа/ будущей профессии?*',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    mostImportantThing: {
      ...defaultControl,
      label: 'Что для тебя самое важное в твоей профессии? Почему ты занимаешься именно этим?*',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    thingYouProudOf: {
      ...defaultControl,
      label: 'Приведи пример дела/проекта, которым ты гордишься. Почему для тебя это важно? *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    ecoHabit: {
      ...defaultControl,
      label:
        'Расскажи про любую экопривычку, которая у тебя уже есть или которую пытаешься приобрести. Почему ты это делаешь? *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    harSituation: {
      ...defaultControl,
      label:
        'Опиши кратко самую сложную ситуацию, которая случалась с тобой в коллективе. Как она разрешилась? *',
      validation: {
        required: { active: true, errorMessage: 'Обязатльное поле' },
      },
    },
    conflits: {
      ...defaultControl,
      label: 'Как ты обычно действуешь в конфликтных ситуациях? *',
      title: 'Как ты обычно действуешь в конфликтных ситуациях? *',
      type: 'radio',
      options: [
        {
          label: 'Я отстаиваю свою точку зрения, так как вижу в ней корень решения проблемы.',
          id: 0,
        },
        {
          label:
            'Я занимаю нейтральную позицию, соглашаясь с мнением большинства, чтобы скорее выйти из неудобного положения.',
          id: 1,
        },
        {
          label:
            'Я пытаюсь решить проблему мирным путем, выслушивая аргументы противоположной стороны и предлагая свои аргументы.',
          id: 2,
        },
      ],
      selected: 0,
      shouldValidate: false,
      valid: true,
    },
    checkbox1: {
      ...defaultControl,
      label:
        'Отметь галочками то, что точно про тебя (спойлер: один и тот же пункт может быть очень желателен для одних проектов, а для других наоборот — лучше без него). *',
      title:
        'Отметь галочками то, что точно про тебя (спойлер: один и тот же пункт может быть очень желателен для одних проектов, а для других наоборот — лучше без него). *',
      type: 'radio',
      options: [
        {
          label: 'Легко переношу полевые условия, холод, неудобство, комаров и прочее.',
          id: 0,
        },
        {
          label: 'Предпочитаю находиться в одиночестве, а не в шумной компании.',
          id: 1,
        },
        {
          label: 'Люблю быть лидером, хочу менять мир и вести людей за собой!',
          id: 2,
        },
        {
          label:
            'Могу и люблю работать физически. Не боюсь поднимать тяжести или испачкать одежду.',
          id: 3,
        },
        {
          label: 'Я всегда держусь своих принципов и убеждений.',
          id: 4,
        },
        {
          label: 'Легко нахожу общий язык с людьми не своего круга.',
          id: 5,
        },
      ],
      selected: 0,
      shouldValidate: false,
      valid: true,
    },
    checkbox2: {
      ...defaultControl,
      label:
        'И здесь тоже: что про тебя, отмечай! Если у тебя есть другие навыки, которые могут быть полезны для волонтёрской практики, опиши их в последнем варианте. *',
      title:
        'И здесь тоже: что про тебя, отмечай! Если у тебя есть другие навыки, которые могут быть полезны для волонтёрской практики, опиши их в последнем варианте. *',
      type: 'radio',
      options: [
        {
          label: 'Умею рисовать или занимаюсь каким-то рукодельем, вижу мир как художник.',
          id: 0,
        },
        {
          label: 'Имею опыт и знания в развитии малого предпринимательства.',
          id: 1,
        },
        {
          label:
            'Виртуозно управляюсь с киркой и лопатой. Или просто умею работать с инструментом.',
          id: 2,
        },
        {
          label: 'Люблю разрешать конфликтные ситуации зная, что правда на моей стороне.',
          id: 3,
        },
        {
          label: 'Я всегда держусь своих принципов и убеждений.',
          id: 4,
        },
        {
          label: 'Легко нахожу общий язык с людьми не своего круга.',
          id: 5,
        },
      ],
      selected: 0,
      shouldValidate: false,
      valid: true,
    },
  };
}

function makeId(length) {
  let result = '';
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  for (let i = 0; i < length - 2; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 2; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}

export default function ApplyForAPass() {
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [checkedRadioButton, setCheckedRadioButton] = React.useState(0);
  const [formControls, setFormControls] = React.useState(createFormControls());
  const [loading, setLoading] = React.useState(false);
  const [orderLink, setOrderLink] = React.useState(false);
  const [selectedImg, setSelectedImg] = React.useState(null);
  const dispatch = useDispatch();
  const state = useSelector(({ pass }) => pass);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      key: makeId(7),
      status: 'pending',
      type: checkedRadioButton,
      date: new Date(),
      imageLink: '',
    };
    Object.keys(formControls).forEach((name) => {
      // if (formControls[name].type === 'radio' && formControls[name].selected) {
      //   formData[name] = {
      //     text: formControls[name].options[formControls[name].selected].label,
      //     label: formControls[name].label,
      //   };
      // }
      formData[name] = {
        text: formControls[name].value,
        label: formControls[name].label,
      };
    });
    console.log(formData);
    setLoading(true);

    console.log(selectedImg);
    const imageName = makeId(20);
    const uploadTask = storage.ref(`images/${imageName}.jpg`).put(selectedImg);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(`${imageName}.jpg`)
          .getDownloadURL()
          .then((url) => {
            formData.imageLink = url;
            axios
              .post(`https://ws-order-a-pass.firebaseio.com/orders2.json/`, formData)
              .then((response) => {
                console.log(response);
                setOrderLink(formData.key);
                setLoading(false);
                dispatch(resetPass());
              });
          });
      },
    );

    setFormControls(createFormControls());
    console.log(formData);
  };

  function validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;
    let error = [];

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
      if (!(value.trim() !== '')) error.push(validation.required.errorMessage);
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
      if (!is.email(value) && value.trim() !== '') error.push(validation.email.errorMessage);
    }
    if (validation.cyrillic) {
      isValid = !value.match(/[^а-я\sё]/i) && isValid;
      if (!!value.match(/[^а-я\sё]/i) && value.trim() !== '')
        error.push(validation.cyrillic.errorMessage);
    }
    if (validation.phone) {
      isValid =
        !!value.match(
          /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm,
        ) && isValid;
      if (
        !!value.match(
          /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm,
        ) &&
        value.trim() !== ''
      )
        console.log(validation.phone.errorMessage);
      error.push(validation.phone.errorMessage);
    }
    return { isValid, error };
  }

  const onRadioButtonSelectHandler = (id) => {
    setCheckedRadioButton(id);
    let isFormValid = true;
    Object.keys(formControls).forEach((name) => {
      isFormValid =
        (formControls[name].valid ||
          (formControls[name].for !== id && formControls[name].for !== undefined)) &&
        isFormValid;
    });
    dispatch(changePassType(id));
    setIsFormValid(isFormValid);
  };

  const onInputChangeHandler = (event, controlName) => {
    const form = { ...formControls };
    const control = { ...form[controlName] };

    control.value = event.target.value;
    control.touched = true;
    const validation = validateControl(control.value, control.validation);
    control.valid = validation.isValid;
    control.errorMessage = validation.error;
    form[controlName] = control;

    let isFormValid = true;
    Object.keys(form).forEach((name) => {
      isFormValid =
        (form[name].valid ||
          (form[name].for !== checkedRadioButton && form[name].for !== undefined)) &&
        isFormValid;
    });

    dispatch(inputsChange(form));
    setIsFormValid(isFormValid);
    setFormControls(form);
  };

  const onRadioChangeHandler = (value, controlName) => {
    const form = { ...formControls };
    const control = { ...form[controlName] };

    control.selected = value;
    control.touched = true;
    control.valid = true;
    control.value = control.options[value].label;
    console.log(control.value);
    form[controlName] = control;

    dispatch(inputsChange(form));
    setFormControls(form);
  };

  const uploadImageHandler = (image) => {
    setSelectedImg(image);
  };

  function renderInputs(id) {
    const inputs = Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      if (control.for === id) {
        return (
          <Input
            key={controlName + index}
            label={control.label}
            value={control.value}
            type={control.type}
            errorMessage={control.errorMessage}
            valid={control.valid}
            touched={control.touched}
            validation={control.validation}
            shouldValidate={control.shouldValidate}
            onChange={(event) => onInputChangeHandler(event, controlName)}
            onRadioChange={(event) => onRadioChangeHandler(event, controlName)}
            options={control.options}
            selected={control.selected}
          />
        );
      } else {
        return null;
      }
    });

    return inputs;
  }

  return (
    <section className="apply-for-a-pass section-indent">
      <h2>Подать заявку</h2>
      <form action="#">
        <div className="left">
          {renderInputs()}
          {/* <RadioButton
            options={[
              {
                label: 'Постоянный',
                id: 0,
              },
              { label: 'Временный', id: 1 },
            ]}
            title="Тип пропуска"
            onSelect={(event) => onRadioButtonSelectHandler(event)}
            checkedRadioButton={checkedRadioButton}
          /> */}
          {/* {renderInputs(checkedRadioButton)} */}

          <Button onClick={formSubmitHandler} disabled={!isFormValid}>
            {loading ? '...' : 'Отправить'}
          </Button>
          <br />
          {orderLink && (
            <span className={`status pending order-link`}>
              {`${window.location.href}applications-list/${orderLink}`}
            </span>
          )}
        </div>
        <div className="right">
          <ImageUploader onUpload={uploadImageHandler} />
        </div>
        {/* <div className="pass">
          {state.type === 1 ? (
            <Guest
              name={state.formData && state.formData.name.value}
              imgSrc={state.formData && state.img}
              startDate={state.formData && state.formData.startDate.value}
              endDate={state.formData && state.formData.endDate.value}
            />
          ) : (
            <Employee
              name={state.formData && state.formData.name.value}
              imgSrc={state.formData && state.img}
            />
          )}
        </div> */}
      </form>
    </section>
  );
}
