import React, {Component} from 'react';

class EduSection extends Component {
    constructor() {
        super();
    
        this.state = { 
            eduDetails: {
                title: '',
                school: '',
                start: '',
                end: '',
                desc: '',
            },

            education: [
                ['1998', '2022', 'School for Real People', 'BSc Accounting & Finance'],
                ['2022', '2024', 'School for Actual People', 'BSc Food & Finance'],
              ],
        }

        this.onSubmitWork = this.onSubmitWork.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);

    }

    toggleForm() {
        const form = document.getElementById('form-edu');
        (form.classList.contains('hidden-form') ?
            form.classList.remove('hidden-form') :
            form.classList.add('hidden-form')
        );
    }

    handleChange= (e) => {
        this.setState({
            eduDetails: {
                title: e.target.form['title'].value,
                school: e.target.form['school'].value,
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
            education: [...this.state.education,
                [
                    this.state.eduDetails.start,
                    this.state.eduDetails.end,
                    this.state.eduDetails.title,
                    this.state.eduDetails.school,
                    this.state.eduDetails.desc,
                ]],
                
            eduDetails: {
                title: '',
                start: '',
                end: '',
                school: '',
                desc: '',
            },
        });
    };

    render() { 
        const {eduDetails, education} = this.state;
        return (
            <section>
                <header>Education:</header>
                <ol>
                    {education.map(function(item){
                        return (
                            <div>
                                <li>{item[2]}, {item[3]}, {item[0]}-{item[1]}</li>
                            </div>
                            )
                    })}
                </ol>
                <button onClick={this.toggleForm} type="button">Add Education</button>
                <form id='form-edu' className='hidden-form' onSubmit={this.onSubmitWork}>
                    <label htmlFor="title">Enter Subject</label>
                    <input
                        onChange={this.handleChange}
                        value= {eduDetails.title}
                        type="text"
                        name="title"
                    />
                    <label htmlFor="school">Enter School Name</label>
                    <input
                        onChange={this.handleChange}
                        value= {eduDetails.school}
                        type="text"
                        name="school"
                    />
                    <label htmlFor="start">Enter Start Date</label>
                    <input
                        onChange={this.handleChange}
                        value= {eduDetails.start}
                        type="text"
                        name="start"
                    />
                    <label htmlFor="end">Enter End Date</label>
                    <input
                        onChange={this.handleChange}
                        value= {eduDetails.end}
                        type="text"
                        name="end"
                    />
                    <button type="submit">Submit</button>
                </form>
            </section>
        );
    }
}
 
export default EduSection;