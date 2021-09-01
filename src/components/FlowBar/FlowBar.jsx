import { DonutLargeRounded, Done, Add } from '@material-ui/icons';

import FlowItem from 'components/FlowItem/FlowItem';
import MainButton from 'components/MainButton/MainButton';

import './FlowBar.scss';

const FlowBar = ({
    selectedStep = 'partial',
    stepClick,
    createFormClick,
}) => {
    return (
        <div className="flow-bar">
            <MainButton className='btn-task' onClick={createFormClick}>
                <span>צור טופס חדש</span>
                <Add />
            </MainButton>
            <FlowItem
                Icon={Done}
                title='טופס מלא'
                isHighlighted={'full' === selectedStep}
                onClick={() => stepClick('full')}
            />
            <FlowItem
                Icon={DonutLargeRounded}
                title='טופס חלקי'
                isHighlighted={'partial' === selectedStep}
                onClick={() => stepClick('partial')}
            />
        </div>
    )
}

export default FlowBar;
