import React from 'react'

class NumberOfStudents extends React.Component {
  state = {
    enrolledStudents: 0,
    waitlistedStudents: 0,
    addEnrolledAmount: 0,
    addWaitlistedAmount: 0,
  }

  updateStudentCountByOne = type => {
    const { enrolledStudents, waitlistedStudents} = this.state;

    if (type && type === `enrolled`) {
        this.setState({
            enrolledStudents: parseInt(enrolledStudents) + 1
        })
    }

    if (type && type === `waitlisted`) {
        this.setState({
            waitlistedStudents: parseInt(waitlistedStudents) + 1
        })
    }
  }

  updateStudentAddAmount = (event, type) => {
    if (type && type === `enrolled`) {
        if (event.target.value === ``) {
            this.setState({
                addEnrolledAmount: 0,
            })
        } else {
            this.setState({
                addEnrolledAmount: parseInt(event.target.value),
            })
        }
    }

    if (type && type === `waitlisted`) {
        if (event.target.value === ``) {
            this.setState({
                addWaitlistedAmount: 0,
            })
        } else {
            this.setState({
                addWaitlistedAmount: parseInt(event.target.value),
            })
        }
    }
  }

  addAmountToTotalStudents = type => {
    const { enrolledStudents, waitlistedStudents, addEnrolledAmount, addWaitlistedAmount } = this.state;

    if (type && type === `enrolled`) {
        this.setState({
            enrolledStudents: enrolledStudents + addEnrolledAmount
        })
    }

    if (type && type === `waitlisted`) {
        this.setState({
            waitlistedStudents: waitlistedStudents + addWaitlistedAmount
        })
    }
  }

  clearStudentCount = type => {
    if (type && type === `enrolled`) {
        this.setState({
            enrolledStudents: 0
        })
    }

    if (type && type === `waitlisted`) {
        this.setState({
            waitlistedStudents: 0
        })
    }
  }


  render () {
    const { enrolledStudents, waitlistedStudents} = this.state;

    return (
      <div>
        <section>
            <h1>Number of Enrolled Students: {enrolledStudents}</h1>
            <button onClick={() => this.updateStudentCountByOne(`enrolled`)}>Add 1 Enrolled Student</button>
            <div>
                <h3>Add Multiple Enrolled Students:</h3>
                <input type='number' placeholder='Increase amount' onChange={(event) => this.updateStudentAddAmount(event, 'enrolled')} />
                <button onClick={() => this.addAmountToTotalStudents(`enrolled`)}>Increase Enrolled Students</button>
                <button onClick={() => this.clearStudentCount('enrolled')}>Clear Enrolled Students</button>
            </div>
        </section>

        <section>
            <h1>Number of Waitlisted Students: {waitlistedStudents}</h1>
            <button onClick={() => this.updateStudentCountByOne(`waitlisted`)}>Add 1 Waitlisted Student</button>
            <div>
                <h3>Add Multiple Waitlisted Students:</h3>
                <input type='number' placeholder='Increase amount' onChange={(event) => this.updateStudentAddAmount(event, 'waitlisted')} />
                <button onClick={() => this.addAmountToTotalStudents(`waitlisted`)}>Increase Waitlisted Students</button>
                <button onClick={() => this.clearStudentCount('waitlisted')}>Clear Waitlisted Students</button>
            </div>
        </section>
      </div>
    )
  }
}

export default NumberOfStudents;
