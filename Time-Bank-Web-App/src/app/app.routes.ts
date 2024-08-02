import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'chat',
        loadComponent: () => import('./chat/chat.component').then((com) => com.ChatComponent)
        //當用戶訪問/chat路徑時，才載入ChatComponent組件 
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((com) => com.LoginComponent)
        //當用戶訪問/login路徑時，才載入LoginComponent組件
    },
    {
        path: '',
        loadComponent: () => import('./login/login.component').then((com) => com.LoginComponent)
        //當用戶訪問根路徑時，也就是沒有任何路徑時，載入LoginComponent組件
    }
];
