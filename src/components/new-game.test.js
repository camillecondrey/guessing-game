import React from 'react';
import {shallow} from 'enzyme';
import {NewGame} from './new-game';
import {NEW_GAME} from '../actions/index';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<NewGame />);
    });

    it('Should dispatch newGame when new game is clicked', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<NewGame dispatch={dispatch} />);
        const link = wrapper.find('.new');
        link.simulate('click', {
            preventDefault() {}
        });
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch.mock.calls[0][0].type).toEqual(NEW_GAME);
    });
});