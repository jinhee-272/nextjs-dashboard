import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mydb',
    password: '비밀번호',
    port: 5432,
});

// 쿼리 실행 함수
export const query = (text: string, params?: any[]) => {
    return pool.query(text, params);
};