// render contact content

const renderContact = () => {
    let div1 = document.createElement('div');
    div1.setAttribute('class', 'info-container');
    let h1 = document.createElement('h2');
    h1.textContent = 'CONTACT US';
    let p1 = document.createElement('p');
    p1.textContent = 'We value honest comments and feedback from our guests. Please feel free to contact us using the contact form.'
    let div2 = document.createElement('div');
    div2.id = 'form-container';
    let form = document.createElement('form');
    form.id = 'contact-form';
    form.name = 'message';
    form.noValidate = '';
    let in1 = document.createElement('input');
    let in2 = document.createElement('input');
    let in3 = document.createElement('textarea');
    in1.id = 'name';
    in1.type = 'text';
    in1.placeholder = 'Name';
    in1.required = 'required';
    in2.id = 'email';
    in2.type = 'email';
    in2.placeholder = 'Email';
    in2.required = 'required';
    in3.id = 'message';
    in3.placeholder = 'Message';
    in3.name = 'message';
    in3.required = 'required';
    let btn = document.createElement('button');
    btn.id = 'btn-send';
    btn.type = 'submit';
    btn.textContent = "SEND MESSAGE";
    form.append(in1, in2, in3, btn)
    div1.append(h1, p1, form);
    return div1;
}

export default renderContact