import React from 'react';
import PropTypes from 'prop-types';
import './QuestionPanel.css';

/**
 * Composant affichant le panneau de questions
 */
const QuestionPanel = ({ questions, onAskQuestion, askedQuestions }) => {
  // Vérifie si une question a déjà été posée
  const isQuestionAsked = (questionId) => {
    return askedQuestions.some(q => q.id === questionId);
  };

  // Récupère la réponse à une question déjà posée
  const getQuestionAnswer = (questionId) => {
    const question = askedQuestions.find(q => q.id === questionId);
    return question ? question.answer : null;
  };

  return (
    <div className="question-panel">
      <h2>Questions</h2>
      <div className="questions-list">
        {questions.map((question) => {
          const asked = isQuestionAsked(question.id);
          const answer = getQuestionAnswer(question.id);
          
          return (
            <button
              key={question.id}
              className={`question-button ${asked ? 'asked' : ''}`}
              onClick={() => !asked && onAskQuestion(question)}
              disabled={asked}
            >
              {question.label}
              {asked && (
                <span className={`answer ${answer ? 'yes' : 'no'}`}>
                  {answer ? 'Oui' : 'Non'}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="remaining-count">
        Questions posées: {askedQuestions.length} / {questions.length}
      </div>
    </div>
  );
};

QuestionPanel.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      property: PropTypes.string.isRequired,
      expectedValue: PropTypes.any
    })
  ).isRequired,
  onAskQuestion: PropTypes.func.isRequired,
  askedQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      answer: PropTypes.bool.isRequired
    })
  )
};

QuestionPanel.defaultProps = {
  askedQuestions: []
};

export default QuestionPanel;