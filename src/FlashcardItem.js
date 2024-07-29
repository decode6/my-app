import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './FlashcardItem.css';  // Assuming you have a CSS file for styling

const FlashcardItem = ({ question, answer, image }) => {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard-container"  onClick={toggleFlip}>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          <Card className='cards'>
            <Card.Img variant="top" src={image} />
            <Card.Body >
              <Card.Title>Question</Card.Title>
              <Card.Text>{question}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="back">
          <Card>
            <Card.Body>
              <Card.Title>Answer</Card.Title>
              <Card.Text>{answer}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlashcardItem;
