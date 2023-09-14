import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PROPOSAL_FETCH, getProposalFetch } from './actions';


function* proposalFetch() {
    return fetch('https://engagebayrv-dot-alpha2-dot-accountbox-154605.appspot.com/rest/api/panel/proposals/6683010600009728').then(response => response.json());
}

function* WorkGetProposalFetch() {
    const proposal: [any] = yield call(proposalFetch);
    console.log(proposal);
}

function* proposalSaga() {
    yield takeEvery(GET_PROPOSAL_FETCH, WorkGetProposalFetch);
}

export default proposalSaga;