import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Registration from "./Registration";

configure({ adapter: new Adapter() });

describe("<Registration/>", () => {
  let wrapper = shallow(<Registration />);

  beforeEach(() => {
    wrapper = shallow(<Registration />);
  });
  afterEach(() => {
    wrapper.unmount();
  });
//   it('should render',()=>{
//       expect(wrapper.exists()).toBe(true);
//       })
//   })

it('should render',()=>{

    expect(wrapper.exists()).toBe(true);
})
  it('should render intitial layout',()=>{
    expect(wrapper.getElements()).toMatchSnapshot();
    
  })
});
