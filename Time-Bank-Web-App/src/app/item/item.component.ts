import { Component, OnInit, afterNextRender } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: any[] = [];

  constructor(private supabaseService: SupabaseService) {
    afterNextRender(() => {
      this.supabaseService.initialize();
    });
  }

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    const { data, error } = await this.supabaseService.getItems();
    if (error) {
      console.error('Error fetching items:', error);
    } else {
      this.items = data;
    }
  }
}

