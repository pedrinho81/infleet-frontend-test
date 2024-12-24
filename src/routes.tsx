import { Router, Route } from 'wouter';
import {HomePage, FavoritesPage} from "@/pages"
import { NotFound } from '@/components/NotFound';

export const Routes = () => (
  <Router>
    <Route path="/" component={HomePage} />
    <Route path="/favorites" component={FavoritesPage} />
    <Route path="*" component={NotFound} />
  </Router>
);
