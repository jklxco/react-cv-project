import React, {Component} from 'react';

class InfoSection extends Component {
    constructor() {
        super();

        this.state = { 

            info: ['Jeff', 'Weed', 'Crack'],

            infoDetails: {
                name: '',
                email: '',
                phone: '',
            }
        } 
        
        this.onSubmitInfo = this.onSubmitInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        const form = document.getElementById('form-info');
        (form.classList.contains('hidden-form') ?
            form.classList.remove('hidden-form') :
            form.classList.add('hidden-form')
        );
    }

    handleChange = (e) => {
        this.setState({
            infoDetails: {
                name: e.target.form['name'].value,
                email: e.target.form['email'].value,
                phone: e.target.form['phone'].value,
            }
        })
    }

    onSubmitInfo = (e) => {
        e.preventDefault()
        this.toggleForm()
        this.setState({
            info: [
                    this.state.infoDetails.name,
                    this.state.infoDetails.email,
                    this.state.infoDetails.phone,
                ],
            })

    }
    
    render() { 
        const {info, infoDetails} = this.state
        return (
            <section>
                <div>
                    <header>About Me:</header>
                    <p>{info[0]}</p>
                    <p>{info[1]}</p>
                    <p>{info[2]}</p>
                </div>
                <form id="form-info" className='hidden-form' onSubmit={this.onSubmitInfo}>
                    <label htmlFor='name'/>
                    <input
                        name="name"
                        onChange={this.handleChange}
                        type='text'
                        value={infoDetails.name} />
                    <label htmlFor='name'/>
                    <input
                        name="email"
                        onChange={this.handleChange}
                        type='text'
                        value={infoDetails.email} />
                    <label htmlFor='name'/>
                    <input
                        name="phone"
                        onChange={this.handleChange}
                        type='text'
                        value={infoDetails.phone} />
                    <button type='submit'>Submit</button>
                </form>
                <button onClick={this.toggleForm} type="button">Add Info</button>
            </section>
        );
    }
}
 
export default InfoSection;