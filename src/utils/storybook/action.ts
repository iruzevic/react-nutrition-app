import { action as sbAction } from '@storybook/addon-actions';
import { Model } from 'datx';

export const action = (name: string, model: Model) => sbAction(name).call(action, model.toJSON());
