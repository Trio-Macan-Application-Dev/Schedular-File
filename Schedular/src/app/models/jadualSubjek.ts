export interface JadualSubjek {
  masa: number;
  hari: number;
  ruang: {
    nama_ruang: string,
    nama_ruang_singkatan: string,
    kod_ruang: string 
  };
  seksyen: number;
  kod_subjek: string;
  id_jws: string;
}