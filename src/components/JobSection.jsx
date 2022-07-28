import React, {Component} from 'react';
import '../styles/styles.css'

class JobSection extends Component {
    constructor() {
        super();
    
        this.state = { 
            expDetails: {
                title: '',
                company: '',
                start: '',
                end: '',
                desc: '',
            },

            experience: [
                ['1998', '2022', 'A Real First Job', 'Big and Rich Company', 'In this job I did many real things. I made a lot of money and did some graphs and everyone thought I was great at excel'],
                ['2022', '2024', 'A Job From The Future', 'Space Company in Space', 'I went to the moon and did lots of spaceman things. The world is neither flat nor round but looks a bit like a croissant. Smells a bit weird too.'],
            ],
        }

        this.onSubmitWork = this.onSubmitWork.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);

    }

    toggleForm() {
        const formWork = document.getElementById('form-exp');
        (formWork.classList.contains('hidden-form') ?
            formWork.classList.remove('hidden-form') :
            formWork.classList.add('hidden-form')
        );
    }

    handleChange= (e) => {
        this.setState({
            expDetails: {
                title: e.target.form['title'].value,
                company: e.target.form['company'].value,
                start: e.target.form['start'].value,
                end: e.target.form['end'].value,
                desc: e.target.form['desc'].value,
            },
        });
    };

    onSubmitWork = (e) => {
        e.preventDefault();
        this.toggleForm();
        this.setState({
            experience: [...this.state.experience,
                [
                    this.state.expDetails.start,
                    this.state.expDetails.end,
                    this.state.expDetails.title,
                    this.state.expDetails.company,
                    this.state.expDetails.desc,
                ]],
                
            expDetails: {
                title: '',
                start: '',
                end: '',
                company: '',
                desc: '',
            },
        });
    };

    render() { 
        const {expDetails, experience} = this.state;
        return (
            <section>
                <header>Work Experience:</header>
                <ol>
                    {experience.map(function(item){
                        return (
                            <div>
                                <li>{item[2]}, {item[3]}, {item[0]}-{item[1]}</li>
                                <p>{item[4]}</p>
                            </div>
                            )
                    })}
                </ol>
                <button onClick={this.toggleForm} type="button">Add Work Experience</button>
                <form id='form-exp' className='hidden-form' onSubmit={this.onSubmitWork}>
                    <label htmlFor="title">Enter Job Title</label>
                    <input
                        onChange={this.handleChange}
                        value= {expDetails.title}
                        type="text"
                        name="title"
                    />
                    <label htmlFor="company">Enter Company Name</label>
                    <input
                        onChange={this.handleChange}
                        value= {expDetails.company}
                        type="text"
                        name="company"
                    />
                    <label htmlFor="start">Enter Start Date</label>
                    <input
                        onChange={this.handleChange}
                        value= {expDetails.start}
                        type="text"
                        name="start"
                    />
                    <label htmlFor="end">Enter End Date</label>
                    <input
                        onChange={this.handleChange}
                        value= {expDetails.end}
                        type="text"
                        name="end"
                    />
                    <label htmlFor="desc">Enter Job Description</label>
                    <input
                        onChange={this.handleChange}
                        value= {expDetails.desc}
                        type="text"
                        name="desc"
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}
 
export default JobSection;