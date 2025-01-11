type AccountType = 'KB' | 'KAKAO';

interface Account {
  id: number;
  name: string;
  balance: number;
  bookmark: boolean;
  type: AccountType
}

export const fetchAccounts = async (): Promise<Account[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: 'KB국민은행 계좌',
          balance: 33_283,
          bookmark: true,
          type: 'KB'
        },
        {
          id: 2,
          name: '카카오뱅크 계좌',
          balance: 85_000,
          bookmark: false,
          type: 'KAKAO'
        },
        {
          id: 3,
          name: 'KB종합통장-보통예금',
          balance: 0,
          bookmark: false,
          type: 'KB'
        },
        {
          id: 4,
          name: '직장인우대통장-보통예금',
          balance: 0,
          bookmark: false,
          type: 'KB'
        },
      ]);
    }, 1000);
  });
};
