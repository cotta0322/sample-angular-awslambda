import { AppModeState } from '../states';
import { reducer } from './app-mode.reducer';

describe('Store\reducers\appMode Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(AppModeState.initialState, action);

      expect(result).toBe(AppModeState.initialState);
    });
  });
});
