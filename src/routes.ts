import { Request, Response } from 'express';
import createUser from './services/CreateUsers';

// string, number, boolean, object, array
// interfaces

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'aflinsjr@icloud.com',
    password: '123456',
    techs: [
    'NodeJs', 
    'ReactJs', 
    'PHP', 
    'React Native'
    { title: 'Javascript', experience: 100 },
  ],
  });
  return response.json({ message: 'Hello World!'});
}
