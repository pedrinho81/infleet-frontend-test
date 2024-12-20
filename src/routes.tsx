import { Router, Route } from 'wouter';
import {HomePage, FavoritesPage} from "@/pages"

export const Routes = () => (
  <Router>
    <Route path="/" component={HomePage} />
    <Route path="/favorites" component={FavoritesPage} />
  </Router>
);
