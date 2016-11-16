import { Challenge, Document } from '../app/models';

let MockMultipleChoiceChallenge: Challenge = {
    challengeId: '0',
    title: 'Mock Multiple Choice Challenge',
    type: 'multiple-choice',
    documentId: 'job',
    challengeItems: [
        {
        id: '0',
        correct: '1',
        prompt: 'Where is part 1?'
        },
        {
        id: '1',
        correct: '2',
        prompt: 'Where is part 2?'
        },
        {
        id: '2',
        correct: '3',
        prompt: 'Where is part 3?'
        },
        {
        id: '3',
        correct: '4',
        prompt: 'Where is part 4?'
        },
        {
        id: '4',
        correct: '5',
        prompt: 'Where is part 5?'
        }
    ]
};

let MockExploreChallenge: Challenge = {
    challengeId: '1',
    title: 'Mock Explore Challenge',
    type: 'explore',
    documentId: 'job',
    prompt: 'Discover the parts of a job posting!',
    challengeItems: [
        {
        id: '0',
        prompt: 'Find the part that.. 1',
        documentSubject: '1'
        },
        {
        id: '1',
        prompt: 'Find the part that.. 2',
        documentSubject: '2'
        },
        {
        id: '2',
        prompt: 'Find the part that.. 3',
        documentSubject: '3'
        },
        {
        id: '3',
        prompt: 'Find the part that.. 4',
        documentSubject: '4'
        },
        {
        id: '4',
        prompt: 'Find the part that.. 5',
        documentSubject: '5'
        }
    ]
};

let MockCharacterChallenge: Challenge = {
    challengeId: '2',
    title: 'Mock Character Challenge',
    type: 'character',
    prompt: 'Match the job with the person who you think fits best',
    challengeItems: [
        {
            id: '0',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair.jpg',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'BIO: Abe is a character. Abe is a character. Abe is a character. Abe is a character.' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio:
                            'BIO: Maria is a character. Maria is a character. Maria is a character. Maria is a character.' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        },
        {
            id: '1',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair.jpg',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'BIO: Abe is a character. Abe is a character. Abe is a character. Abe is a character.' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio:
                            'BIO: Maria is a character. Maria is a character. Maria is a character. Maria is a character.' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        },
        {
            id: '2',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair.jpg',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'BIO: Abe is a character. Abe is a character. Abe is a character. Abe is a character.' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio:
                            'BIO: Maria is a character. Maria is a character. Maria is a character. Maria is a character.' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        },
        {
            id: '3',
            prompt: 'Who fits this job the best?',
            documentSubject: '/assets/images/jobfair.jpg',
            data: {
                characters: [
                    {
                        name: 'Abe',
                        bio:
                            'BIO: Abe is a character. Abe is a character. Abe is a character. Abe is a character.' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ' +
                            'Abe is a character. Abe is a character. Abe is a character. Abe is a character. ',
                        imageUrl: '/assets/images/abe.png'
                    },
                    {
                        name: 'Maria',
                        bio:
                            'BIO: Maria is a character. Maria is a character. Maria is a character. Maria is a character.' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ' +
                            'Maria is a character. Maria is a character. Maria is a character. Maria is a character. ',
                        imageUrl: '/assets/images/maria.png'
                    }
                ]
            }
        }
    ]
};

let mockChallenges = {};
mockChallenges[MockCharacterChallenge.challengeId] = MockCharacterChallenge;
mockChallenges[MockExploreChallenge.challengeId] = MockExploreChallenge;
mockChallenges[MockMultipleChoiceChallenge.challengeId] = MockMultipleChoiceChallenge;
export const MockChallenges = mockChallenges;

export function createMockDocument(): Document {
    let document: Document = {
        id: 'job',
        rows: [
        { id: '0', hasSound: false, state: 'inactive' },
        { id: '1', hasSound: true, state: 'inactive' },
        { id: '2', hasSound: true, state: 'inactive' },
        { id: '3', hasSound: true, state: 'inactive' },
        { id: '4', hasSound: true, state: 'inactive' },
        { id: '5', hasSound: true, state: 'inactive' },
        { id: '6', hasSound: true, state: 'inactive' },
        { id: '7', hasSound: true, state: 'inactive' },
        { id: '8', hasSound: true, state: 'inactive' }
        ]
    };
    for (let row of document.rows) {
      if (row.hasSound) {
        row.sound = {
          url: '/assets/sounds/' + document.id + row.id + '.wav',
          autoplay: false,
          id: document.id + row.id,
          type: 'audio/wav'
        };
      }
    }

    return document;
}
