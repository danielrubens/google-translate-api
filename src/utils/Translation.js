import { TranslationServiceClient } from '@google-cloud/translate';

// Instantiates a client
const translationClient = new TranslationServiceClient();

const projectId = 'still-algebra-382604';
const location = 'global';
const text = 'Hello, world!';