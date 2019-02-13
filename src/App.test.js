import React from 'react';
import { shallow } from '../enzyme';

import { ActivityScreen } from './containers/ActivityScreen/';
import { VenueScreen } from './containers/VenueScreen/';
import { Header, UserInput } from './components';
import FormControl from '@material-ui/core/FormControl'

let props = {};


describe('App 💻', () => {

    describe('Activity Screen', () => {

      props = {
        isLoading: false,
        error: null,
        pageLoading: () => null,
        saveActivityData: () => null,
        classes: {
          formControl: 'foo'
        }
      }

      it('should render the ActivityScreen without exploding...', () => {
        const wrapper = shallow(<ActivityScreen {...props} />);
        expect(wrapper).toMatchSnapshot();
      });
    
      it('should render the correct no of User Inputs', () => {
        const wrapper = shallow(<ActivityScreen {...props} />);
        expect(wrapper.find(UserInput)).toHaveLength(3);
      });
    
      it('should render the correct title for the screen', () => {
        const wrapper = shallow(<ActivityScreen {...props} />);
        expect(wrapper.find('.title').text()).toEqual('About Your Activity');
      });
    
      it('should render the Header', () => {
        const wrapper = shallow(<ActivityScreen {...props} />);
        expect(wrapper.find(Header)).toHaveLength(1);
      });
    
      it('should render the age selection dropdowns...', () => {
        const wrapper = shallow(<ActivityScreen {...props} />);
        expect(wrapper.find(FormControl)).toHaveLength(2);
      });
    })

    describe('Venue Screen', () => {

      props = {
        isLoading: false,
        addresses: [],
        activityData: [],
        classes: {
          formControl: 'foo'
        },
        error: null,
        pageLoading: () => null,
        saveActivityData: () => null,
        updateStateUserIsInputtingData: () => null,
      }


      it('should render the VenueScreen without exploding...', () => {
        const wrapper = shallow(<VenueScreen {...props} />);
        expect(wrapper).toMatchSnapshot();
      });
    
      it('should render the correct no of User Inputs', () => {
        const wrapper = shallow(<VenueScreen {...props} />);
        expect(wrapper.find(UserInput)).toHaveLength(7);
      });
    
      it('should render the correct title for the screen', () => {
        const wrapper = shallow(<VenueScreen {...props} />);
        expect(wrapper.find('.title').text()).toEqual('Add The Address');
      });
    
      it('should render the Header', () => {
        const wrapper = shallow(<VenueScreen {...props} />);
        expect(wrapper.find(Header)).toHaveLength(1);
      });
    
      it('should render the expected number of child elements (9) ', () => {
        const wrapper = shallow(<VenueScreen {...props} />);
        expect(wrapper.find('.main-body').props().children.length).toEqual(9);
      });
  });
});