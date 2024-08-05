import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getItems() {
    return this.supabase.from('items').select('*');
  }

  initialize() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
}