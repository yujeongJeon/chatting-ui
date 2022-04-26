import { RecoilRoot } from 'recoil';
import Wrapper from '$components/layout/Wrapper';
import '$scss/global_style.scss';
import Input from '$components/Input/Input';
import MessageBoxList from '$components/MessageBoxList/MessageBoxList';

function App() {
    return (
        <RecoilRoot>
            <Wrapper>
                <MessageBoxList />
                <Input />
            </Wrapper>
        </RecoilRoot>
    );
}

export default App;
