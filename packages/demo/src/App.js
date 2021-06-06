import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"

import Main from './components/Main'
import Page from './components/Page'
import SwatchPickerArticle from './articles/SwatchPickerArticle'
import TableOfContent from './components/TableOfContent'

const defaultPath = '/swatch-picker'

const App = () => {
    return (
        <Page>
            <Router>
                <TableOfContent />
                <Main>
                    <Switch>
                        <Route exact path="/swatch-picker" component={SwatchPickerArticle} />
                        <Route exact path="/" render={() => <Redirect to={defaultPath} />} />
                    </Switch>
                </Main>
            </Router>
        </Page>
    )
}

export default App
