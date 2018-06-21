import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from '/SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
