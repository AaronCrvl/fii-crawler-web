import React from 'react';
import { iFIIApi } from '../interfaces/iFIIApi';
import { TransacaoType } from '../types/TransacaoType';
import { NoticiaType } from '../types/NoticiaType';
import { FIIType } from '../types/FIIType';
import { FIIDetalhadoType } from '../types/FIIDetalhadoType';

class FIIApi implements iFIIApi {
  // FII --------------------------->
  dataJson_Fii : FIIType[] = [
    {
      "nome": "AAGR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AAZQ11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,28",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,09",
      "patrimonio": "0,92",
      "cota": "9,63"
    },
    {
      "nome": "ABCP11",
      "ultimoRedimentoRS": "0,50",
      "ultimosRedimento": "0,70",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,52",
      "patrimonio": "0,73",
      "cota": "91,86"
    },
    {
      "nome": "AFCR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AFHI11",
      "ultimoRedimentoRS": "1,05",
      "ultimosRedimento": "1,07",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "1,04",
      "patrimonio": "1,06",
      "cota": "95,95"
    },
    {
      "nome": "AFOF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AGRX11",
      "ultimoRedimentoRS": "0,14",
      "ultimosRedimento": "1,29",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,14",
      "patrimonio": "1,31",
      "cota": "10,12"
    },
    {
      "nome": "AIEC11",
      "ultimoRedimentoRS": "0,76",
      "ultimosRedimento": "1,11",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "1,11",
      "cota": "94,70"
    },
    {
      "nome": "AJFI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ALMI11",
      "ultimoRedimentoRS": "0,37",
      "ultimosRedimento": "N/A",
      "dataPagamento": "13/04/2017",
      "dataBase": "31/03/2017",
      "rendimentoMedioAnual": "9,24",
      "patrimonio": "N/A",
      "cota": "2.250,09"
    },
    {
      "nome": "ALZC11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ALZM11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,85",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,97",
      "cota": "91,60"
    },
    {
      "nome": "ALZR11",
      "ultimoRedimentoRS": "0,83",
      "ultimosRedimento": "0,71",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "0,80",
      "patrimonio": "0,69",
      "cota": "106,25"
    },
    {
      "nome": "AMAZ11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ANCR11B",
      "ultimoRedimentoRS": "42,08",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/05/2023",
      "dataBase": "28/04/2023",
      "rendimentoMedioAnual": "21,12",
      "patrimonio": "N/A",
      "cota": "3.442,69"
    },
    {
      "nome": "APTO11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "1,01",
      "dataPagamento": "21/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,10",
      "patrimonio": "1,03",
      "cota": "10,50"
    },
    {
      "nome": "APXM11",
      "ultimoRedimentoRS": "0,46",
      "ultimosRedimento": "0,39",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "0,04",
      "patrimonio": "0,03",
      "cota": "94,94"
    },
    {
      "nome": "AQLL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ARCT11",
      "ultimoRedimentoRS": "0,39",
      "ultimosRedimento": "0,44",
      "dataPagamento": "20/01/2023",
      "dataBase": "13/01/2023",
      "rendimentoMedioAnual": "1,20",
      "patrimonio": "1,35",
      "cota": "99,77"
    },
    {
      "nome": "ARFI11B",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AROA11",
      "ultimoRedimentoRS": "0,00",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,00",
      "patrimonio": "N/A",
      "cota": "1,07"
    },
    {
      "nome": "ARRI11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "1,13",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "1,27",
      "cota": "9,00"
    },
    {
      "nome": "ARXD11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,50",
      "patrimonio": "N/A",
      "cota": "101,48"
    },
    {
      "nome": "ASMT11",
      "ultimoRedimentoRS": "0,77",
      "ultimosRedimento": "1,11",
      "dataPagamento": "23/02/2023",
      "dataBase": "14/02/2023",
      "rendimentoMedioAnual": "0,79",
      "patrimonio": "1,13",
      "cota": "84,73"
    },
    {
      "nome": "ASRF11",
      "ultimoRedimentoRS": "256,33",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/07/2023",
      "dataBase": "18/07/2023",
      "rendimentoMedioAnual": "21,36",
      "patrimonio": "N/A",
      "cota": "9.999,66"
    },
    {
      "nome": "ATCR11",
      "ultimoRedimentoRS": "0,30",
      "ultimosRedimento": "N/A",
      "dataPagamento": "10/07/2023",
      "dataBase": "30/06/2023",
      "rendimentoMedioAnual": "0,10",
      "patrimonio": "N/A",
      "cota": "80,79"
    },
    {
      "nome": "ATSA11",
      "ultimoRedimentoRS": "0,05",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/03/2023",
      "dataBase": "28/02/2023",
      "rendimentoMedioAnual": "0,03",
      "patrimonio": "N/A",
      "cota": "81,55"
    },
    {
      "nome": "ATSA11B",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ATWN11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "AURB11",
      "ultimoRedimentoRS": "0,30",
      "ultimosRedimento": "N/A",
      "dataPagamento": "21/09/2023",
      "dataBase": "14/09/2023",
      "rendimentoMedioAnual": "0,54",
      "patrimonio": "N/A",
      "cota": "82,94"
    },
    {
      "nome": "BARI11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,68",
      "dataPagamento": "22/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,90",
      "patrimonio": "1,02",
      "cota": "97,37"
    },
    {
      "nome": "BBFI11B",
      "ultimoRedimentoRS": "7,43",
      "ultimosRedimento": "0,74",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "19,94",
      "patrimonio": "2,00",
      "cota": "2.147,67"
    },
    {
      "nome": "BBFO11",
      "ultimoRedimentoRS": "0,62",
      "ultimosRedimento": "0,83",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,68",
      "patrimonio": "0,91",
      "cota": "82,39"
    },
    {
      "nome": "BBGO11",
      "ultimoRedimentoRS": "0,92",
      "ultimosRedimento": "0,98",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,06",
      "patrimonio": "1,13",
      "cota": "97,71"
    },
    {
      "nome": "BBIM11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,21",
      "patrimonio": "N/A",
      "cota": "31,36"
    },
    {
      "nome": "BBIM11",
      "ultimoRedimentoRS": "12,21",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,21",
      "patrimonio": "N/A",
      "cota": "31,36"
    },
    {
      "nome": "BBPO11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,92",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,93",
      "cota": "99,83"
    },
    {
      "nome": "BBRC11",
      "ultimoRedimentoRS": "1,13",
      "ultimosRedimento": "0,96",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,03",
      "patrimonio": "0,88",
      "cota": "108,02"
    },
    {
      "nome": "BBVJ11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "BCFF11",
      "ultimoRedimentoRS": "0,56",
      "ultimosRedimento": "0,75",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,56",
      "patrimonio": "0,75",
      "cota": "77,46"
    },
    {
      "nome": "BCIA11",
      "ultimoRedimentoRS": "0,83",
      "ultimosRedimento": "0,80",
      "dataPagamento": "29/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,78",
      "patrimonio": "0,76",
      "cota": "110,12"
    },
    {
      "nome": "BCRI11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "1,13",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,88",
      "patrimonio": "1,24",
      "cota": "99,06"
    },
    {
      "nome": "BETW11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "BICE11",
      "ultimoRedimentoRS": "7,88",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "12,30",
      "patrimonio": "N/A",
      "cota": "985,70"
    },
    {
      "nome": "BICR11",
      "ultimoRedimentoRS": "0,52",
      "ultimosRedimento": "0,57",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,84",
      "patrimonio": "0,92",
      "cota": "101,80"
    },
    {
      "nome": "BIME11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "1,06",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "1,01",
      "cota": "8,83"
    },
    {
      "nome": "BIPD11",
      "ultimoRedimentoRS": "10,38",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/08/2023",
      "dataBase": "04/08/2023",
      "rendimentoMedioAnual": "0,87",
      "patrimonio": "N/A",
      "cota": "983,48"
    },
    {
      "nome": "BIPE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "BLCA11",
      "ultimoRedimentoRS": "0,57",
      "ultimosRedimento": "0,45",
      "dataPagamento": "18/09/2023",
      "dataBase": "11/09/2023",
      "rendimentoMedioAnual": "0,57",
      "patrimonio": "0,45",
      "cota": "136,13"
    },
    {
      "nome": "BLCP11",
      "ultimoRedimentoRS": "0,56",
      "ultimosRedimento": "0,63",
      "dataPagamento": "21/10/2022",
      "dataBase": "14/10/2022",
      "rendimentoMedioAnual": "0,42",
      "patrimonio": "0,48",
      "cota": "111,76"
    },
    {
      "nome": "BLMC11",
      "ultimoRedimentoRS": "0,66",
      "ultimosRedimento": "0,81",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,82",
      "patrimonio": "0,99",
      "cota": "98,48"
    },
    {
      "nome": "BLMG11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "1,15",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "1,24",
      "cota": "87,59"
    },
    {
      "nome": "BLMO11",
      "ultimoRedimentoRS": "102,00",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "64,33",
      "patrimonio": "N/A",
      "cota": "33.385,52"
    },
    {
      "nome": "BLMR11",
      "ultimoRedimentoRS": "0,06",
      "ultimosRedimento": "0,83",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "0,90",
      "cota": "8,12"
    },
    {
      "nome": "BLUR11",
      "ultimoRedimentoRS": "1,03",
      "ultimosRedimento": "1,03",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "1,03",
      "patrimonio": "1,03",
      "cota": "95,34"
    },
    {
      "nome": "BMII11",
      "ultimoRedimentoRS": "0,23",
      "ultimosRedimento": "N/A",
      "dataPagamento": "07/08/2019",
      "dataBase": "31/07/2019",
      "rendimentoMedioAnual": "1,66",
      "patrimonio": "N/A",
      "cota": "491,53"
    },
    {
      "nome": "BMLC11",
      "ultimoRedimentoRS": "0,76",
      "ultimosRedimento": "0,72",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,01",
      "patrimonio": "0,96",
      "cota": "110,81"
    },
    {
      "nome": "BMLC11B",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "BNFS11",
      "ultimoRedimentoRS": "1,49",
      "ultimosRedimento": "1,22",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,48",
      "patrimonio": "1,21",
      "cota": "91,78"
    },
    {
      "nome": "BPFF11",
      "ultimoRedimentoRS": "0,62",
      "ultimosRedimento": "0,84",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,63",
      "patrimonio": "0,85",
      "cota": "78,35"
    },
    {
      "nome": "BPLC11",
      "ultimoRedimentoRS": "14,42",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/03/2023",
      "dataBase": "06/03/2023",
      "rendimentoMedioAnual": "9,33",
      "patrimonio": "N/A",
      "cota": "9.776,35"
    },
    {
      "nome": "BPML11",
      "ultimoRedimentoRS": "0,27",
      "ultimosRedimento": "0,46",
      "dataPagamento": "24/02/2023",
      "dataBase": "15/02/2023",
      "rendimentoMedioAnual": "0,29",
      "patrimonio": "0,50",
      "cota": "124,12"
    },
    {
      "nome": "BPRP11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,89",
      "patrimonio": "N/A",
      "cota": "109,15"
    },
    {
      "nome": "BRCO11",
      "ultimoRedimentoRS": "0,87",
      "ultimosRedimento": "0,69",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,71",
      "patrimonio": "0,57",
      "cota": "120,85"
    },
    {
      "nome": "BRCR11",
      "ultimoRedimentoRS": "0,41",
      "ultimosRedimento": "0,65",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,46",
      "patrimonio": "0,73",
      "cota": "100,64"
    },
    {
      "nome": "BREV11",
      "ultimoRedimentoRS": "0,58",
      "ultimosRedimento": "0,55",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,86",
      "cota": "117,72"
    },
    {
      "nome": "BRHT11B",
      "ultimoRedimentoRS": "5,43",
      "ultimosRedimento": "N/A",
      "dataPagamento": "23/08/2023",
      "dataBase": "16/08/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "N/A",
      "cota": "76,65"
    },
    {
      "nome": "BRIM11",
      "ultimoRedimentoRS": "28,91",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "25,61",
      "patrimonio": "N/A",
      "cota": "1.152,74"
    },
    {
      "nome": "BRIP11",
      "ultimoRedimentoRS": "6,03",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/08/2023",
      "dataBase": "07/08/2023",
      "rendimentoMedioAnual": "10,19",
      "patrimonio": "N/A",
      "cota": "947,06"
    },
    {
      "nome": "BRIX11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "BRLA11",
      "ultimoRedimentoRS": "0,82",
      "ultimosRedimento": "N/A",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "1,08",
      "patrimonio": "N/A",
      "cota": "156,79"
    },
    {
      "nome": "BROF11",
      "ultimoRedimentoRS": "0,54",
      "ultimosRedimento": "0,79",
      "dataPagamento": "26/09/2023",
      "dataBase": "19/09/2023",
      "rendimentoMedioAnual": "0,25",
      "patrimonio": "0,36",
      "cota": "106,25"
    },
    {
      "nome": "BRSE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "BTAG11",
      "ultimoRedimentoRS": "1,35",
      "ultimosRedimento": "1,41",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,30",
      "patrimonio": "1,36",
      "cota": "N/A"
    },
    {
      "nome": "BTAL11",
      "ultimoRedimentoRS": "0,71",
      "ultimosRedimento": "0,79",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "0,80",
      "patrimonio": "0,88",
      "cota": "104,49"
    },
    {
      "nome": "BTCI11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "1,04",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,10",
      "patrimonio": "1,06",
      "cota": "10,30"
    },
    {
      "nome": "BTCR11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,98",
      "dataPagamento": "16/11/2022",
      "dataBase": "08/11/2022",
      "rendimentoMedioAnual": "1,00",
      "patrimonio": "1,08",
      "cota": "94,66"
    },
    {
      "nome": "BTLG11",
      "ultimoRedimentoRS": "0,76",
      "ultimosRedimento": "0,73",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,75",
      "patrimonio": "0,71",
      "cota": "98,25"
    },
    {
      "nome": "BTRA11",
      "ultimoRedimentoRS": "0,56",
      "ultimosRedimento": "0,75",
      "dataPagamento": "31/08/2023",
      "dataBase": "24/08/2023",
      "rendimentoMedioAnual": "0,80",
      "patrimonio": "1,07",
      "cota": "119,02"
    },
    {
      "nome": "BTSG11",
      "ultimoRedimentoRS": "0,92",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,88",
      "patrimonio": "N/A",
      "cota": "137,74"
    },
    {
      "nome": "BTSI11",
      "ultimoRedimentoRS": "0,73",
      "ultimosRedimento": "N/A",
      "dataPagamento": "31/08/2023",
      "dataBase": "24/08/2023",
      "rendimentoMedioAnual": "0,54",
      "patrimonio": "N/A",
      "cota": "122,02"
    },
    {
      "nome": "BTWR11",
      "ultimoRedimentoRS": "0,43",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,51",
      "patrimonio": "N/A",
      "cota": "111,90"
    },
    {
      "nome": "BVAR11",
      "ultimoRedimentoRS": "35,74",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "16,48",
      "patrimonio": "N/A",
      "cota": "1.046,48"
    },
    {
      "nome": "BZEL11",
      "ultimoRedimentoRS": "5,09",
      "ultimosRedimento": "N/A",
      "dataPagamento": "26/05/2023",
      "dataBase": "25/05/2023",
      "rendimentoMedioAnual": "0,43",
      "patrimonio": "N/A",
      "cota": "117,42"
    },
    {
      "nome": "BZLI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CACR11",
      "ultimoRedimentoRS": "1,43",
      "ultimosRedimento": "1,35",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,47",
      "patrimonio": "1,39",
      "cota": "103,39"
    },
    {
      "nome": "CARE11",
      "ultimoRedimentoRS": "0,01",
      "ultimosRedimento": "0,23",
      "dataPagamento": "15/09/2021",
      "dataBase": "06/09/2021",
      "rendimentoMedioAnual": "0,00",
      "patrimonio": "0,11",
      "cota": "8,17"
    },
    {
      "nome": "CBOP11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "0,37",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,30",
      "patrimonio": "0,91",
      "cota": "73,80"
    },
    {
      "nome": "CCLB11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CCME11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,82",
      "dataPagamento": "18/09/2023",
      "dataBase": "11/09/2023",
      "rendimentoMedioAnual": "0,83",
      "patrimonio": "0,76",
      "cota": "102,02"
    },
    {
      "nome": "CCRF11",
      "ultimoRedimentoRS": "0,47",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "0,78",
      "patrimonio": "N/A",
      "cota": "98,92"
    },
    {
      "nome": "CEOC11",
      "ultimoRedimentoRS": "0,43",
      "ultimosRedimento": "0,84",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,59",
      "patrimonio": "1,14",
      "cota": "78,32"
    },
    {
      "nome": "CFHI11",
      "ultimoRedimentoRS": "36,51",
      "ultimosRedimento": "N/A",
      "dataPagamento": "22/07/2021",
      "dataBase": "15/07/2021",
      "rendimentoMedioAnual": "3,04",
      "patrimonio": "N/A",
      "cota": "815,38"
    },
    {
      "nome": "CFII11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CIXR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CJCT11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "0,12",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,80",
      "patrimonio": "2,65",
      "cota": "66,15"
    },
    {
      "nome": "CJFI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CNES11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,27",
      "dataPagamento": "30/08/2023",
      "dataBase": "23/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "0,38",
      "cota": "90,76"
    },
    {
      "nome": "COPP11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CORM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CPFF11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,90",
      "dataPagamento": "19/09/2023",
      "dataBase": "11/09/2023",
      "rendimentoMedioAnual": "0,54",
      "patrimonio": "0,70",
      "cota": "83,99"
    },
    {
      "nome": "CPFO11",
      "ultimoRedimentoRS": "11,00",
      "ultimosRedimento": "N/A",
      "dataPagamento": "16/08/2023",
      "dataBase": "08/08/2023",
      "rendimentoMedioAnual": "3,00",
      "patrimonio": "N/A",
      "cota": "42,28"
    },
    {
      "nome": "CPSH11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "0,92",
      "dataPagamento": "26/09/2023",
      "dataBase": "19/09/2023",
      "rendimentoMedioAnual": "0,28",
      "patrimonio": "0,23",
      "cota": "111,36"
    },
    {
      "nome": "CPTR11",
      "ultimoRedimentoRS": "1,35",
      "ultimosRedimento": "1,39",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "1,37",
      "patrimonio": "1,41",
      "cota": "97,90"
    },
    {
      "nome": "CPTS11",
      "ultimoRedimentoRS": "0,79",
      "ultimosRedimento": "0,88",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,77",
      "patrimonio": "0,87",
      "cota": "90,97"
    },
    {
      "nome": "CRAA11",
      "ultimoRedimentoRS": "1,36",
      "ultimosRedimento": "1,33",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,73",
      "patrimonio": "0,72",
      "cota": "101,38"
    },
    {
      "nome": "CRFF11",
      "ultimoRedimentoRS": "0,63",
      "ultimosRedimento": "0,76",
      "dataPagamento": "13/09/2023",
      "dataBase": "01/09/2023",
      "rendimentoMedioAnual": "0,62",
      "patrimonio": "0,75",
      "cota": "90,37"
    },
    {
      "nome": "CSMC11",
      "ultimoRedimentoRS": "20,67",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/07/2023",
      "dataBase": "19/07/2023",
      "rendimentoMedioAnual": "1,72",
      "patrimonio": "N/A",
      "cota": "1.039,47"
    },
    {
      "nome": "CTNP11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "CTXT11",
      "ultimoRedimentoRS": "0,01",
      "ultimosRedimento": "0,04",
      "dataPagamento": "16/07/2021",
      "dataBase": "08/07/2021",
      "rendimentoMedioAnual": "0,03",
      "patrimonio": "0,14",
      "cota": "39,92"
    },
    {
      "nome": "CVBI11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,96",
      "dataPagamento": "18/09/2023",
      "dataBase": "11/09/2023",
      "rendimentoMedioAnual": "0,94",
      "patrimonio": "1,01",
      "cota": "96,58"
    },
    {
      "nome": "CVPR11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "1,29",
      "patrimonio": "N/A",
      "cota": "98,54"
    },
    {
      "nome": "CXAG11",
      "ultimoRedimentoRS": "0,71",
      "ultimosRedimento": "0,85",
      "dataPagamento": "19/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,77",
      "patrimonio": "0,91",
      "cota": "115,55"
    },
    {
      "nome": "CXCE11B",
      "ultimoRedimentoRS": "0,42",
      "ultimosRedimento": "0,96",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,41",
      "patrimonio": "0,95",
      "cota": "65,28"
    },
    {
      "nome": "CXCI11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "0,94",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,84",
      "patrimonio": "0,93",
      "cota": "97,55"
    },
    {
      "nome": "CXCO11",
      "ultimoRedimentoRS": "0,74",
      "ultimosRedimento": "0,87",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,78",
      "patrimonio": "0,92",
      "cota": "99,11"
    },
    {
      "nome": "CXRI11",
      "ultimoRedimentoRS": "0,57",
      "ultimosRedimento": "0,67",
      "dataPagamento": "13/09/2023",
      "dataBase": "01/09/2023",
      "rendimentoMedioAnual": "0,56",
      "patrimonio": "0,66",
      "cota": "91,55"
    },
    {
      "nome": "CXTL11",
      "ultimoRedimentoRS": "1,99",
      "ultimosRedimento": "0,67",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "6,86",
      "patrimonio": "2,33",
      "cota": "414,87"
    },
    {
      "nome": "CYCR11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "1,06",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,10",
      "patrimonio": "1,09",
      "cota": "9,85"
    },
    {
      "nome": "CYLD11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "DAMT11B",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "0,47",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "0,43",
      "cota": "13,18"
    },
    {
      "nome": "DCRA11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,29",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,12",
      "patrimonio": "1,28",
      "cota": "9,63"
    },
    {
      "nome": "DEVA11",
      "ultimoRedimentoRS": "0,47",
      "ultimosRedimento": "0,95",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,74",
      "patrimonio": "1,48",
      "cota": "96,22"
    },
    {
      "nome": "DLMT11",
      "ultimoRedimentoRS": "0,00",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,01",
      "patrimonio": "N/A",
      "cota": "0,64"
    },
    {
      "nome": "DMAC11",
      "ultimoRedimentoRS": "4,89",
      "ultimosRedimento": "N/A",
      "dataPagamento": "22/12/2021",
      "dataBase": "15/12/2021",
      "rendimentoMedioAnual": "3,34",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "DOMC11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "DOVL11B",
      "ultimoRedimentoRS": "9,53",
      "ultimosRedimento": "N/A",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "9,08",
      "patrimonio": "N/A",
      "cota": "1.182,40"
    },
    {
      "nome": "DPRO11",
      "ultimoRedimentoRS": "0,65",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,93",
      "patrimonio": "N/A",
      "cota": "96,80"
    },
    {
      "nome": "DRIT11B",
      "ultimoRedimentoRS": "0,29",
      "ultimosRedimento": "0,31",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,64",
      "patrimonio": "0,69",
      "cota": "132,63"
    },
    {
      "nome": "DVFF11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,93",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,75",
      "patrimonio": "0,87",
      "cota": "96,09"
    },
    {
      "nome": "EDFO11B",
      "ultimoRedimentoRS": "1,76",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,73",
      "patrimonio": "N/A",
      "cota": "180,72"
    },
    {
      "nome": "EDGA11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,34",
      "dataPagamento": "31/08/2023",
      "dataBase": "24/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "0,55",
      "cota": "61,24"
    },
    {
      "nome": "EGAF11",
      "ultimoRedimentoRS": "1,50",
      "ultimosRedimento": "1,50",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "2,42",
      "patrimonio": "2,42",
      "cota": "99,07"
    },
    {
      "nome": "EGYR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ELDO11B",
      "ultimoRedimentoRS": "6,47",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "2,81",
      "patrimonio": "N/A",
      "cota": "1.439,97"
    },
    {
      "nome": "EQIN11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "EQIR11",
      "ultimoRedimentoRS": "0,11",
      "ultimosRedimento": "1,13",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "1,13",
      "cota": "9,84"
    },
    {
      "nome": "ERCR11",
      "ultimoRedimentoRS": "4.326,46",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "1.794,62",
      "patrimonio": "N/A",
      "cota": "55.542,87"
    },
    {
      "nome": "ERPA11",
      "ultimoRedimentoRS": "0,72",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,70",
      "patrimonio": "N/A",
      "cota": "136,44"
    },
    {
      "nome": "ESTQ11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "EURO11",
      "ultimoRedimentoRS": "1,88",
      "ultimosRedimento": "0,76",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,86",
      "patrimonio": "0,76",
      "cota": "325,22"
    },
    {
      "nome": "EVBI11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,77",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "0,78",
      "cota": "98,00"
    },
    {
      "nome": "EXES11",
      "ultimoRedimentoRS": "1,03",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "N/A",
      "cota": "92,37"
    },
    {
      "nome": "FAED11",
      "ultimoRedimentoRS": "1,51",
      "ultimosRedimento": "0,92",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,55",
      "patrimonio": "0,95",
      "cota": "217,63"
    },
    {
      "nome": "FAGL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FAMB11B",
      "ultimoRedimentoRS": "9,16",
      "ultimosRedimento": "0,56",
      "dataPagamento": "13/11/2020",
      "dataBase": "30/10/2020",
      "rendimentoMedioAnual": "27,10",
      "patrimonio": "1,64",
      "cota": "3.054,32"
    },
    {
      "nome": "FAOE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FARU11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FATN11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "0,90",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,85",
      "patrimonio": "0,90",
      "cota": "99,56"
    },
    {
      "nome": "FCFL11",
      "ultimoRedimentoRS": "0,81",
      "ultimosRedimento": "0,70",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "0,79",
      "patrimonio": "0,68",
      "cota": "116,22"
    },
    {
      "nome": "FEXC11",
      "ultimoRedimentoRS": "0,11",
      "ultimosRedimento": "0,13",
      "dataPagamento": "13/01/2023",
      "dataBase": "06/01/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "0,14",
      "cota": "90,75"
    },
    {
      "nome": "FGAA11",
      "ultimoRedimentoRS": "0,13",
      "ultimosRedimento": "1,28",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,14",
      "patrimonio": "1,36",
      "cota": "9,58"
    },
    {
      "nome": "FGPM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FIGS11",
      "ultimoRedimentoRS": "0,45",
      "ultimosRedimento": "0,71",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,43",
      "patrimonio": "0,68",
      "cota": "75,95"
    },
    {
      "nome": "FIIB11",
      "ultimoRedimentoRS": "3,75",
      "ultimosRedimento": "0,72",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "3,52",
      "patrimonio": "0,68",
      "cota": "461,71"
    },
    {
      "nome": "FIIP11B",
      "ultimoRedimentoRS": "1,44",
      "ultimosRedimento": "0,81",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,37",
      "patrimonio": "0,77",
      "cota": "203,21"
    },
    {
      "nome": "FINF11",
      "ultimoRedimentoRS": "0,25",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,27",
      "patrimonio": "N/A",
      "cota": "40,77"
    },
    {
      "nome": "FISC11",
      "ultimoRedimentoRS": "0,44",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,36",
      "patrimonio": "N/A",
      "cota": "115,22"
    },
    {
      "nome": "FISD11",
      "ultimoRedimentoRS": "7,46",
      "ultimosRedimento": "N/A",
      "dataPagamento": "03/05/2023",
      "dataBase": "25/04/2023",
      "rendimentoMedioAnual": "2,64",
      "patrimonio": "N/A",
      "cota": "74,53"
    },
    {
      "nome": "FIVN11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FIXX11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FLCR11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "0,98",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,06",
      "patrimonio": "1,10",
      "cota": "98,86"
    },
    {
      "nome": "FLEM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FLFL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FLMA11",
      "ultimoRedimentoRS": "0,82",
      "ultimosRedimento": "0,58",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,90",
      "patrimonio": "0,63",
      "cota": "159,81"
    },
    {
      "nome": "FLRP11",
      "ultimoRedimentoRS": "13,50",
      "ultimosRedimento": "0,68",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "13,36",
      "patrimonio": "0,67",
      "cota": "1.824,88"
    },
    {
      "nome": "FMOF11",
      "ultimoRedimentoRS": "0,15",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2023",
      "dataBase": "30/06/2023",
      "rendimentoMedioAnual": "0,05",
      "patrimonio": "N/A",
      "cota": "118,79"
    },
    {
      "nome": "FPAB11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,44",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,76",
      "patrimonio": "0,87",
      "cota": "374,42"
    },
    {
      "nome": "FPNG11",
      "ultimoRedimentoRS": "0,46",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,69",
      "patrimonio": "N/A",
      "cota": "164,03"
    },
    {
      "nome": "FRHY11",
      "ultimoRedimentoRS": "1,03",
      "ultimosRedimento": "N/A",
      "dataPagamento": "07/02/2023",
      "dataBase": "31/01/2023",
      "rendimentoMedioAnual": "0,96",
      "patrimonio": "N/A",
      "cota": "99,53"
    },
    {
      "nome": "FTCE11B",
      "ultimoRedimentoRS": "112,96",
      "ultimosRedimento": "N/A",
      "dataPagamento": "18/08/2023",
      "dataBase": "01/08/2023",
      "rendimentoMedioAnual": "33,78",
      "patrimonio": "N/A",
      "cota": "2.832,50"
    },
    {
      "nome": "FVBI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "FVPQ11",
      "ultimoRedimentoRS": "1,20",
      "ultimosRedimento": "0,95",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,72",
      "cota": "192,38"
    },
    {
      "nome": "FZDA11",
      "ultimoRedimentoRS": "2,26",
      "ultimosRedimento": "1,90",
      "dataPagamento": "08/05/2023",
      "dataBase": "28/04/2023",
      "rendimentoMedioAnual": "0,19",
      "patrimonio": "0,16",
      "cota": "99,24"
    },
    {
      "nome": "FZDB11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "GALG11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "0,92",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "0,90",
      "cota": "9,15"
    },
    {
      "nome": "GAME11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "1,07",
      "dataPagamento": "22/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "0,10",
      "patrimonio": "1,07",
      "cota": "9,98"
    },
    {
      "nome": "GCFF11",
      "ultimoRedimentoRS": "3,07",
      "ultimosRedimento": "N/A",
      "dataPagamento": "07/08/2023",
      "dataBase": "31/07/2023",
      "rendimentoMedioAnual": "0,92",
      "patrimonio": "N/A",
      "cota": "77,51"
    },
    {
      "nome": "GCOI11",
      "ultimoRedimentoRS": "0,81",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2023",
      "dataBase": "07/07/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "N/A",
      "cota": "98,61"
    },
    {
      "nome": "GCRA11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "1,21",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,20",
      "patrimonio": "1,31",
      "cota": "97,85"
    },
    {
      "nome": "GCRI11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "1,06",
      "dataPagamento": "21/09/2023",
      "dataBase": "14/09/2023",
      "rendimentoMedioAnual": "1,07",
      "patrimonio": "1,20",
      "cota": "95,93"
    },
    {
      "nome": "GESE11B",
      "ultimoRedimentoRS": "14,71",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "12,85",
      "patrimonio": "N/A",
      "cota": "1.761,50"
    },
    {
      "nome": "GGRC11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "0,80",
      "dataPagamento": "11/09/2023",
      "dataBase": "01/09/2023",
      "rendimentoMedioAnual": "1,00",
      "patrimonio": "0,84",
      "cota": "113,74"
    },
    {
      "nome": "GLOG11",
      "ultimoRedimentoRS": "0,63",
      "ultimosRedimento": "0,90",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,70",
      "patrimonio": "1,00",
      "cota": "106,34"
    },
    {
      "nome": "GRLV11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "GRWA11",
      "ultimoRedimentoRS": "0,15",
      "ultimosRedimento": "1,44",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,06",
      "patrimonio": "0,58",
      "cota": "10,14"
    },
    {
      "nome": "GSFI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "GTLG11",
      "ultimoRedimentoRS": "60,62",
      "ultimosRedimento": "N/A",
      "dataPagamento": "04/09/2023",
      "dataBase": "28/08/2023",
      "rendimentoMedioAnual": "8,25",
      "patrimonio": "N/A",
      "cota": "91,71"
    },
    {
      "nome": "GTWR11",
      "ultimoRedimentoRS": "0,79",
      "ultimosRedimento": "0,91",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,78",
      "patrimonio": "0,89",
      "cota": "95,06"
    },
    {
      "nome": "GURB11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,79",
      "patrimonio": "N/A",
      "cota": "111,16"
    },
    {
      "nome": "GVBI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "GZIT11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HAAA11",
      "ultimoRedimentoRS": "0,29",
      "ultimosRedimento": "0,49",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,45",
      "patrimonio": "0,76",
      "cota": "80,87"
    },
    {
      "nome": "HABT11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "1,02",
      "dataPagamento": "12/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,13",
      "patrimonio": "1,16",
      "cota": "99,26"
    },
    {
      "nome": "HBCR11",
      "ultimoRedimentoRS": "0,68",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,63",
      "patrimonio": "N/A",
      "cota": "103,01"
    },
    {
      "nome": "HBRH11",
      "ultimoRedimentoRS": "0,52",
      "ultimosRedimento": "0,55",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,60",
      "patrimonio": "0,64",
      "cota": "112,05"
    },
    {
      "nome": "HBTT11",
      "ultimoRedimentoRS": "16,58",
      "ultimosRedimento": "1,57",
      "dataPagamento": "15/10/2020",
      "dataBase": "30/09/2020",
      "rendimentoMedioAnual": "10,88",
      "patrimonio": "1,03",
      "cota": "N/A"
    },
    {
      "nome": "HCHG11",
      "ultimoRedimentoRS": "0,52",
      "ultimosRedimento": "0,63",
      "dataPagamento": "13/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,97",
      "patrimonio": "1,17",
      "cota": "97,09"
    },
    {
      "nome": "HCPR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HCRA11",
      "ultimoRedimentoRS": "1,36",
      "ultimosRedimento": "1,32",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,27",
      "patrimonio": "1,24",
      "cota": "N/A"
    },
    {
      "nome": "HCRI11",
      "ultimoRedimentoRS": "2,69",
      "ultimosRedimento": "0,91",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "2,58",
      "patrimonio": "0,87",
      "cota": "308,28"
    },
    {
      "nome": "HCST11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HCTR11",
      "ultimoRedimentoRS": "0,17",
      "ultimosRedimento": "0,37",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,73",
      "patrimonio": "1,59",
      "cota": "111,82"
    },
    {
      "nome": "HDEL11",
      "ultimoRedimentoRS": "1,87",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2023",
      "dataBase": "30/06/2023",
      "rendimentoMedioAnual": "0,48",
      "patrimonio": "N/A",
      "cota": "98,79"
    },
    {
      "nome": "HDOF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HFOF11",
      "ultimoRedimentoRS": "0,63",
      "ultimosRedimento": "0,77",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,63",
      "patrimonio": "0,76",
      "cota": "83,68"
    },
    {
      "nome": "HGAG11",
      "ultimoRedimentoRS": "0,22",
      "ultimosRedimento": "0,88",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "6,91",
      "patrimonio": "27,68",
      "cota": "24,05"
    },
    {
      "nome": "HGBS11",
      "ultimoRedimentoRS": "2,00",
      "ultimosRedimento": "0,86",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,47",
      "patrimonio": "0,63",
      "cota": "226,43"
    },
    {
      "nome": "HGCR11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "1,02",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,18",
      "patrimonio": "1,10",
      "cota": "103,70"
    },
    {
      "nome": "HGFF11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,77",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,65",
      "patrimonio": "0,72",
      "cota": "94,14"
    },
    {
      "nome": "HGIC11",
      "ultimoRedimentoRS": "1,02",
      "ultimosRedimento": "0,97",
      "dataPagamento": "13/09/2023",
      "dataBase": "04/09/2023",
      "rendimentoMedioAnual": "1,02",
      "patrimonio": "0,97",
      "cota": "125,08"
    },
    {
      "nome": "HGLG11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "0,68",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,23",
      "patrimonio": "0,76",
      "cota": "153,20"
    },
    {
      "nome": "HGPO11",
      "ultimoRedimentoRS": "1,60",
      "ultimosRedimento": "0,57",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,60",
      "patrimonio": "0,57",
      "cota": "299,11"
    },
    {
      "nome": "HGRE11",
      "ultimoRedimentoRS": "0,78",
      "ultimosRedimento": "0,57",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,86",
      "patrimonio": "0,63",
      "cota": "155,30"
    },
    {
      "nome": "HGRS11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HGRU11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "0,64",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,98",
      "patrimonio": "0,74",
      "cota": "123,67"
    },
    {
      "nome": "HILG11",
      "ultimoRedimentoRS": "1,34",
      "ultimosRedimento": "N/A",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,58",
      "patrimonio": "N/A",
      "cota": "180,73"
    },
    {
      "nome": "HLOG11",
      "ultimoRedimentoRS": "0,65",
      "ultimosRedimento": "0,69",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,65",
      "patrimonio": "0,70",
      "cota": "115,49"
    },
    {
      "nome": "HMOC11",
      "ultimoRedimentoRS": "23,80",
      "ultimosRedimento": "N/A",
      "dataPagamento": "06/04/2021",
      "dataBase": "30/03/2021",
      "rendimentoMedioAnual": "12,22",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HOFC11",
      "ultimoRedimentoRS": "0,11",
      "ultimosRedimento": "0,47",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,20",
      "patrimonio": "0,83",
      "cota": "89,23"
    },
    {
      "nome": "HOSI11",
      "ultimoRedimentoRS": "0,46",
      "ultimosRedimento": "0,66",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,65",
      "patrimonio": "0,92",
      "cota": "92,23"
    },
    {
      "nome": "HPDP11",
      "ultimoRedimentoRS": "0,53",
      "ultimosRedimento": "0,65",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,52",
      "patrimonio": "0,64",
      "cota": "89,47"
    },
    {
      "nome": "HRDF11",
      "ultimoRedimentoRS": "6,80",
      "ultimosRedimento": "N/A",
      "dataPagamento": "01/10/2019",
      "dataBase": "30/09/2019",
      "rendimentoMedioAnual": "0,57",
      "patrimonio": "N/A",
      "cota": "1,15"
    },
    {
      "nome": "HREC11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "1,00",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,89",
      "patrimonio": "1,05",
      "cota": "93,64"
    },
    {
      "nome": "HRES11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "HSAF11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,87",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,92",
      "patrimonio": "1,07",
      "cota": "93,69"
    },
    {
      "nome": "HSLG11",
      "ultimoRedimentoRS": "0,73",
      "ultimosRedimento": "0,77",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,72",
      "patrimonio": "0,76",
      "cota": "104,31"
    },
    {
      "nome": "HSML11",
      "ultimoRedimentoRS": "0,74",
      "ultimosRedimento": "0,77",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,72",
      "patrimonio": "0,74",
      "cota": "95,26"
    },
    {
      "nome": "HSRE11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,58",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,63",
      "patrimonio": "0,60",
      "cota": "93,31"
    },
    {
      "nome": "HTMX11",
      "ultimoRedimentoRS": "2,02",
      "ultimosRedimento": "1,46",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,31",
      "patrimonio": "0,95",
      "cota": "137,04"
    },
    {
      "nome": "HUCG11",
      "ultimoRedimentoRS": "0,20",
      "ultimosRedimento": "0,22",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,42",
      "patrimonio": "0,45",
      "cota": "102,55"
    },
    {
      "nome": "HUSC11",
      "ultimoRedimentoRS": "0,92",
      "ultimosRedimento": "0,81",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "0,71",
      "cota": "145,32"
    },
    {
      "nome": "HUSI11",
      "ultimoRedimentoRS": "8,26",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "8,03",
      "patrimonio": "N/A",
      "cota": "1.111,77"
    },
    {
      "nome": "IAAG11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "0,81",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,01",
      "patrimonio": "0,11",
      "cota": "9,63"
    },
    {
      "nome": "IAGR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "IBCR11",
      "ultimoRedimentoRS": "0,98",
      "ultimosRedimento": "1,28",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "1,18",
      "cota": "96,88"
    },
    {
      "nome": "IBFF11",
      "ultimoRedimentoRS": "14,79",
      "ultimosRedimento": "N/A",
      "dataPagamento": "28/09/2022",
      "dataBase": "16/09/2022",
      "rendimentoMedioAnual": "6,13",
      "patrimonio": "N/A",
      "cota": "14,78"
    },
    {
      "nome": "IDFI11",
      "ultimoRedimentoRS": "0,19",
      "ultimosRedimento": "0,52",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "2,04",
      "patrimonio": "5,52",
      "cota": "36,78"
    },
    {
      "nome": "IDGR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "IFID11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "IFIE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "IRDM11",
      "ultimoRedimentoRS": "0,74",
      "ultimosRedimento": "0,89",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "0,85",
      "patrimonio": "1,03",
      "cota": "89,53"
    },
    {
      "nome": "IRIM11",
      "ultimoRedimentoRS": "0,89",
      "ultimosRedimento": "0,97",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "0,95",
      "patrimonio": "1,03",
      "cota": "95,06"
    },
    {
      "nome": "ITIP11",
      "ultimoRedimentoRS": "0,72",
      "ultimosRedimento": "0,92",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,80",
      "patrimonio": "1,02",
      "cota": "77,83"
    },
    {
      "nome": "ITIT11",
      "ultimoRedimentoRS": "0,57",
      "ultimosRedimento": "0,71",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,59",
      "patrimonio": "0,73",
      "cota": "87,37"
    },
    {
      "nome": "JASC11",
      "ultimoRedimentoRS": "0,52",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,44",
      "patrimonio": "N/A",
      "cota": "102,78"
    },
    {
      "nome": "JBFO11",
      "ultimoRedimentoRS": "0,45",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,55",
      "patrimonio": "N/A",
      "cota": "88,56"
    },
    {
      "nome": "JCCJ11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "JCDA11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "JCDB11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "JFLL11",
      "ultimoRedimentoRS": "0,62",
      "ultimosRedimento": "0,82",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,63",
      "patrimonio": "0,83",
      "cota": "100,95"
    },
    {
      "nome": "JGPX11",
      "ultimoRedimentoRS": "1,41",
      "ultimosRedimento": "1,37",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,26",
      "patrimonio": "1,23",
      "cota": "95,31"
    },
    {
      "nome": "JPPA11",
      "ultimoRedimentoRS": "1,15",
      "ultimosRedimento": "1,11",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,38",
      "patrimonio": "1,33",
      "cota": "99,30"
    },
    {
      "nome": "JPPC11",
      "ultimoRedimentoRS": "0,17",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2022",
      "dataBase": "30/06/2022",
      "rendimentoMedioAnual": "0,60",
      "patrimonio": "N/A",
      "cota": "367,13"
    },
    {
      "nome": "JRDM11",
      "ultimoRedimentoRS": "7,83",
      "ultimosRedimento": "N/A",
      "dataPagamento": "31/07/2023",
      "dataBase": "26/07/2023",
      "rendimentoMedioAnual": "7,72",
      "patrimonio": "N/A",
      "cota": "88,84"
    },
    {
      "nome": "JSAF11",
      "ultimoRedimentoRS": "0,93",
      "ultimosRedimento": "0,95",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,93",
      "patrimonio": "0,95",
      "cota": "100,23"
    },
    {
      "nome": "JSRE11",
      "ultimoRedimentoRS": "0,46",
      "ultimosRedimento": "0,59",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,47",
      "patrimonio": "0,61",
      "cota": "112,85"
    },
    {
      "nome": "JTPR11",
      "ultimoRedimentoRS": "1,63",
      "ultimosRedimento": "N/A",
      "dataPagamento": "28/09/2020",
      "dataBase": "31/08/2020",
      "rendimentoMedioAnual": "0,38",
      "patrimonio": "N/A",
      "cota": "92,09"
    },
    {
      "nome": "KCRE11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,81",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,87",
      "patrimonio": "0,88",
      "cota": "104,75"
    },
    {
      "nome": "KEVE11",
      "ultimoRedimentoRS": "19,57",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2023",
      "dataBase": "30/06/2023",
      "rendimentoMedioAnual": "10,83",
      "patrimonio": "N/A",
      "cota": "922,41"
    },
    {
      "nome": "KFOF11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,78",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,75",
      "patrimonio": "0,78",
      "cota": "98,89"
    },
    {
      "nome": "KINP11",
      "ultimoRedimentoRS": "2,90",
      "ultimosRedimento": "N/A",
      "dataPagamento": "28/04/2023",
      "dataBase": "20/04/2023",
      "rendimentoMedioAnual": "1,32",
      "patrimonio": "N/A",
      "cota": "3,69"
    },
    {
      "nome": "KISU11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,80",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "0,86",
      "cota": "9,24"
    },
    {
      "nome": "KIVO11",
      "ultimoRedimentoRS": "1,15",
      "ultimosRedimento": "1,23",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,33",
      "patrimonio": "1,43",
      "cota": "94,33"
    },
    {
      "nome": "KLOG11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "KNCA11",
      "ultimoRedimentoRS": "1,20",
      "ultimosRedimento": "1,13",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,30",
      "patrimonio": "1,22",
      "cota": "103,51"
    },
    {
      "nome": "KNCR11",
      "ultimoRedimentoRS": "1,20",
      "ultimosRedimento": "1,20",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,15",
      "patrimonio": "1,15",
      "cota": "100,86"
    },
    {
      "nome": "KNHF11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "0,96",
      "dataPagamento": "13/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "0,08",
      "cota": "102,58"
    },
    {
      "nome": "KNHY11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,88",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,97",
      "patrimonio": "0,95",
      "cota": "102,99"
    },
    {
      "nome": "KNIP11",
      "ultimoRedimentoRS": "0,50",
      "ultimosRedimento": "0,54",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,74",
      "patrimonio": "0,80",
      "cota": "99,70"
    },
    {
      "nome": "KNPR11",
      "ultimoRedimentoRS": "3,88",
      "ultimosRedimento": "N/A",
      "dataPagamento": "12/07/2023",
      "dataBase": "30/06/2023",
      "rendimentoMedioAnual": "0,53",
      "patrimonio": "N/A",
      "cota": "99,66"
    },
    {
      "nome": "KNRE11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "12,52",
      "dataPagamento": "13/01/2023",
      "dataBase": "29/12/2022",
      "rendimentoMedioAnual": "0,13",
      "patrimonio": "24,07",
      "cota": "0,83"
    },
    {
      "nome": "KNRI11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "0,59",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,99",
      "patrimonio": "0,62",
      "cota": "160,16"
    },
    {
      "nome": "KNSC11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,88",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,83",
      "patrimonio": "0,92",
      "cota": "91,66"
    },
    {
      "nome": "KNUQ11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "N/A",
      "dataPagamento": "13/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,21",
      "patrimonio": "N/A",
      "cota": "100,20"
    },
    {
      "nome": "KOPA11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "LASC11",
      "ultimoRedimentoRS": "0,57",
      "ultimosRedimento": "0,55",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,00",
      "patrimonio": "0,97",
      "cota": "102,11"
    },
    {
      "nome": "LATR11B",
      "ultimoRedimentoRS": "9,24",
      "ultimosRedimento": "N/A",
      "dataPagamento": "03/04/2023",
      "dataBase": "27/03/2023",
      "rendimentoMedioAnual": "1,60",
      "patrimonio": "N/A",
      "cota": "10,59"
    },
    {
      "nome": "LAVF11",
      "ultimoRedimentoRS": "1,30",
      "ultimosRedimento": "N/A",
      "dataPagamento": "13/05/2022",
      "dataBase": "05/05/2022",
      "rendimentoMedioAnual": "0,88",
      "patrimonio": "N/A",
      "cota": "4,30"
    },
    {
      "nome": "LFTT11",
      "ultimoRedimentoRS": "2,63",
      "ultimosRedimento": "5,55",
      "dataPagamento": "21/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "3,78",
      "patrimonio": "7,96",
      "cota": "25,69"
    },
    {
      "nome": "LGCP11",
      "ultimoRedimentoRS": "0,64",
      "ultimosRedimento": "0,73",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,62",
      "patrimonio": "0,71",
      "cota": "101,81"
    },
    {
      "nome": "LIFE11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,19",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,14",
      "patrimonio": "1,33",
      "cota": "10,14"
    },
    {
      "nome": "LKDV11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "LLAO11",
      "ultimoRedimentoRS": "16,62",
      "ultimosRedimento": "N/A",
      "dataPagamento": "04/09/2023",
      "dataBase": "25/08/2023",
      "rendimentoMedioAnual": "1,97",
      "patrimonio": "N/A",
      "cota": "95,21"
    },
    {
      "nome": "LOFT11B",
      "ultimoRedimentoRS": "0,20",
      "ultimosRedimento": "0,72",
      "dataPagamento": "15/04/2021",
      "dataBase": "31/03/2021",
      "rendimentoMedioAnual": "0,02",
      "patrimonio": "0,06",
      "cota": "26,92"
    },
    {
      "nome": "LPLP11",
      "ultimoRedimentoRS": "61,42",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "13,30",
      "patrimonio": "N/A",
      "cota": "495,95"
    },
    {
      "nome": "LRDI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "LSAG11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "1,03",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,55",
      "patrimonio": "1,46",
      "cota": "99,74"
    },
    {
      "nome": "LSPA11",
      "ultimoRedimentoRS": "0,81",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "N/A",
      "cota": "114,36"
    },
    {
      "nome": "LTMT11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "LUGG11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,67",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,57",
      "patrimonio": "0,64",
      "cota": "123,48"
    },
    {
      "nome": "LVBI11",
      "ultimoRedimentoRS": "0,79",
      "ultimosRedimento": "0,68",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "0,65",
      "cota": "115,80"
    },
    {
      "nome": "MALL11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "0,72",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,79",
      "patrimonio": "0,67",
      "cota": "119,76"
    },
    {
      "nome": "MANA11",
      "ultimoRedimentoRS": "0,11",
      "ultimosRedimento": "1,09",
      "dataPagamento": "22/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "1,13",
      "cota": "9,85"
    },
    {
      "nome": "MATV11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,73",
      "dataPagamento": "22/03/2023",
      "dataBase": "15/03/2023",
      "rendimentoMedioAnual": "1,02",
      "patrimonio": "1,23",
      "cota": "90,92"
    },
    {
      "nome": "MAVC11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MAXR11",
      "ultimoRedimentoRS": "0,73",
      "ultimosRedimento": "0,99",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,65",
      "patrimonio": "0,88",
      "cota": "123,32"
    },
    {
      "nome": "MBRF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MCCI11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,95",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "1,00",
      "patrimonio": "1,05",
      "cota": "95,91"
    },
    {
      "nome": "MCHF11",
      "ultimoRedimentoRS": "0,09",
      "ultimosRedimento": "0,96",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,10",
      "patrimonio": "1,08",
      "cota": "9,57"
    },
    {
      "nome": "MCHY11",
      "ultimoRedimentoRS": "1,30",
      "ultimosRedimento": "1,17",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "1,55",
      "patrimonio": "1,40",
      "cota": "99,14"
    },
    {
      "nome": "MFAI11",
      "ultimoRedimentoRS": "0,52",
      "ultimosRedimento": "0,78",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,54",
      "patrimonio": "0,80",
      "cota": "74,30"
    },
    {
      "nome": "MFCR11",
      "ultimoRedimentoRS": "1,40",
      "ultimosRedimento": "1,35",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,12",
      "patrimonio": "1,08",
      "cota": "105,91"
    },
    {
      "nome": "MFII11",
      "ultimoRedimentoRS": "1,07",
      "ultimosRedimento": "1,12",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,10",
      "patrimonio": "1,15",
      "cota": "101,15"
    },
    {
      "nome": "MGCR11",
      "ultimoRedimentoRS": "0,33",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,12",
      "patrimonio": "N/A",
      "cota": "9,78"
    },
    {
      "nome": "MGFF11",
      "ultimoRedimentoRS": "0,55",
      "ultimosRedimento": "0,81",
      "dataPagamento": "19/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,53",
      "patrimonio": "0,77",
      "cota": "75,63"
    },
    {
      "nome": "MGHT11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,93",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,72",
      "patrimonio": "1,11",
      "cota": "87,53"
    },
    {
      "nome": "MGIM11",
      "ultimoRedimentoRS": "0,18",
      "ultimosRedimento": "N/A",
      "dataPagamento": "28/03/2022",
      "dataBase": "21/03/2022",
      "rendimentoMedioAnual": "9,37",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MGLC11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MGLG11",
      "ultimoRedimentoRS": "0,35",
      "ultimosRedimento": "0,86",
      "dataPagamento": "24/02/2023",
      "dataBase": "15/02/2023",
      "rendimentoMedioAnual": "0,44",
      "patrimonio": "1,09",
      "cota": "61,48"
    },
    {
      "nome": "MGRI11",
      "ultimoRedimentoRS": "1,30",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,54",
      "patrimonio": "N/A",
      "cota": "105,61"
    },
    {
      "nome": "MINT11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MMPD11",
      "ultimoRedimentoRS": "5,18",
      "ultimosRedimento": "N/A",
      "dataPagamento": "26/07/2023",
      "dataBase": "19/07/2023",
      "rendimentoMedioAnual": "0,43",
      "patrimonio": "N/A",
      "cota": "110,63"
    },
    {
      "nome": "MMVE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MOFF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MORC11",
      "ultimoRedimentoRS": "1,24",
      "ultimosRedimento": "1,34",
      "dataPagamento": "27/09/2023",
      "dataBase": "20/09/2023",
      "rendimentoMedioAnual": "1,11",
      "patrimonio": "1,19",
      "cota": "98,37"
    },
    {
      "nome": "MORE11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,79",
      "dataPagamento": "21/09/2023",
      "dataBase": "14/09/2023",
      "rendimentoMedioAnual": "0,60",
      "patrimonio": "0,79",
      "cota": "85,43"
    },
    {
      "nome": "MTOF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MTRS11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MVFI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "MXRF11",
      "ultimoRedimentoRS": "0,11",
      "ultimosRedimento": "1,00",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "1,00",
      "cota": "10,00"
    },
    {
      "nome": "MYDW11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "NAVT11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "1,13",
      "dataPagamento": "21/09/2023",
      "dataBase": "14/09/2023",
      "rendimentoMedioAnual": "0,88",
      "patrimonio": "0,99",
      "cota": "96,63"
    },
    {
      "nome": "NCHB11",
      "ultimoRedimentoRS": "0,91",
      "ultimosRedimento": "1,08",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "1,07",
      "patrimonio": "1,27",
      "cota": "91,82"
    },
    {
      "nome": "NCRA11",
      "ultimoRedimentoRS": "0,16",
      "ultimosRedimento": "1,45",
      "dataPagamento": "26/09/2023",
      "dataBase": "19/09/2023",
      "rendimentoMedioAnual": "0,15",
      "patrimonio": "1,35",
      "cota": "10,63"
    },
    {
      "nome": "NCRI11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,78",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "0,83",
      "cota": "10,29"
    },
    {
      "nome": "NEWL11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "0,85",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,99",
      "patrimonio": "0,89",
      "cota": "117,87"
    },
    {
      "nome": "NEWU11",
      "ultimoRedimentoRS": "0,20",
      "ultimosRedimento": "0,27",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "0,15",
      "cota": "69,06"
    },
    {
      "nome": "NPAR11",
      "ultimoRedimentoRS": "14,07",
      "ultimosRedimento": "109,73",
      "dataPagamento": "02/05/2022",
      "dataBase": "25/04/2022",
      "rendimentoMedioAnual": "1,17",
      "patrimonio": "9,14",
      "cota": "14,07"
    },
    {
      "nome": "NSLU11",
      "ultimoRedimentoRS": "1,54",
      "ultimosRedimento": "0,78",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,51",
      "patrimonio": "0,76",
      "cota": "199,53"
    },
    {
      "nome": "NVHO11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "0,76",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "0,76",
      "cota": "14,00"
    },
    {
      "nome": "NVIF11B",
      "ultimoRedimentoRS": "0,89",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,52",
      "patrimonio": "N/A",
      "cota": "366,97"
    },
    {
      "nome": "OBAL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "OCRE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "OGHY11",
      "ultimoRedimentoRS": "0,13",
      "ultimosRedimento": "1,27",
      "dataPagamento": "22/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "0,64",
      "cota": "9,69"
    },
    {
      "nome": "OIAG11",
      "ultimoRedimentoRS": "0,13",
      "ultimosRedimento": "1,29",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,14",
      "patrimonio": "1,42",
      "cota": "9,79"
    },
    {
      "nome": "ONEF11",
      "ultimoRedimentoRS": "1,02",
      "ultimosRedimento": "0,51",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,98",
      "patrimonio": "0,49",
      "cota": "229,99"
    },
    {
      "nome": "OPTM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "ORPD11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "OUCY11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "OUFF11",
      "ultimoRedimentoRS": "0,72",
      "ultimosRedimento": "0,98",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,71",
      "patrimonio": "0,96",
      "cota": "78,42"
    },
    {
      "nome": "OUJP11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "1,08",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,22",
      "patrimonio": "1,20",
      "cota": "98,73"
    },
    {
      "nome": "OULG11",
      "ultimoRedimentoRS": "0,42",
      "ultimosRedimento": "1,02",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,36",
      "patrimonio": "0,86",
      "cota": "67,64"
    },
    {
      "nome": "OURE11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,97",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,98",
      "patrimonio": "1,19",
      "cota": "92,31"
    },
    {
      "nome": "PABY11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PATB11",
      "ultimoRedimentoRS": "7,15",
      "ultimosRedimento": "N/A",
      "dataPagamento": "31/03/2023",
      "dataBase": "24/03/2023",
      "rendimentoMedioAnual": "1,64",
      "patrimonio": "N/A",
      "cota": "148,78"
    },
    {
      "nome": "PATC11",
      "ultimoRedimentoRS": "1,40",
      "ultimosRedimento": "1,94",
      "dataPagamento": "25/09/2023",
      "dataBase": "01/09/2023",
      "rendimentoMedioAnual": "0,59",
      "patrimonio": "0,82",
      "cota": "73,28"
    },
    {
      "nome": "PATL11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,82",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,59",
      "patrimonio": "0,80",
      "cota": "98,50"
    },
    {
      "nome": "PBLV11",
      "ultimoRedimentoRS": "39,65",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/07/2023",
      "dataBase": "19/07/2023",
      "rendimentoMedioAnual": "12,42",
      "patrimonio": "N/A",
      "cota": "1.523,30"
    },
    {
      "nome": "PCAS11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PEMA11",
      "ultimoRedimentoRS": "0,42",
      "ultimosRedimento": "0,90",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,62",
      "patrimonio": "1,33",
      "cota": "73,32"
    },
    {
      "nome": "PLCA11",
      "ultimoRedimentoRS": "1,13",
      "ultimosRedimento": "1,25",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,10",
      "patrimonio": "1,22",
      "cota": "94,90"
    },
    {
      "nome": "PLCR11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "1,10",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,02",
      "patrimonio": "1,12",
      "cota": "93,02"
    },
    {
      "nome": "PLOG11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,99",
      "dataPagamento": "15/05/2023",
      "dataBase": "28/04/2023",
      "rendimentoMedioAnual": "0,74",
      "patrimonio": "1,05",
      "cota": "106,21"
    },
    {
      "nome": "PLRI11",
      "ultimoRedimentoRS": "0,18",
      "ultimosRedimento": "1,01",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,13",
      "patrimonio": "0,70",
      "cota": "29,50"
    },
    {
      "nome": "PMFO11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PNCR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PNDL11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/08/2023",
      "dataBase": "07/08/2023",
      "rendimentoMedioAnual": "0,50",
      "patrimonio": "N/A",
      "cota": "998,78"
    },
    {
      "nome": "PNLM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PNLN11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PNPR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PNRC11",
      "ultimoRedimentoRS": "1,02",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,38",
      "patrimonio": "N/A",
      "cota": "101,69"
    },
    {
      "nome": "PORD11",
      "ultimoRedimentoRS": "1,03",
      "ultimosRedimento": "1,13",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,01",
      "patrimonio": "1,11",
      "cota": "98,06"
    },
    {
      "nome": "PQAG11",
      "ultimoRedimentoRS": "0,44",
      "ultimosRedimento": "0,78",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,44",
      "patrimonio": "0,78",
      "cota": "57,11"
    },
    {
      "nome": "PQDP11",
      "ultimoRedimentoRS": "16,73",
      "ultimosRedimento": "0,86",
      "dataPagamento": "20/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "16,98",
      "patrimonio": "0,87",
      "cota": "3.120,41"
    },
    {
      "nome": "PRSN11B",
      "ultimoRedimentoRS": "0,15",
      "ultimosRedimento": "N/A",
      "dataPagamento": "04/08/2023",
      "dataBase": "28/07/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "N/A",
      "cota": "4,08"
    },
    {
      "nome": "PRSV11",
      "ultimoRedimentoRS": "1,62",
      "ultimosRedimento": "0,42",
      "dataPagamento": "15/10/2020",
      "dataBase": "30/09/2020",
      "rendimentoMedioAnual": "2,04",
      "patrimonio": "0,53",
      "cota": "244,22"
    },
    {
      "nome": "PRTS11",
      "ultimoRedimentoRS": "0,05",
      "ultimosRedimento": "N/A",
      "dataPagamento": "18/05/2022",
      "dataBase": "11/05/2022",
      "rendimentoMedioAnual": "0,01",
      "patrimonio": "N/A",
      "cota": "0,06"
    },
    {
      "nome": "PRZS11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PURB11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "PVBI11",
      "ultimoRedimentoRS": "0,67",
      "ultimosRedimento": "0,64",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,61",
      "patrimonio": "0,58",
      "cota": "101,03"
    },
    {
      "nome": "QAGR11",
      "ultimoRedimentoRS": "0,43",
      "ultimosRedimento": "0,83",
      "dataPagamento": "11/09/2023",
      "dataBase": "01/09/2023",
      "rendimentoMedioAnual": "0,43",
      "patrimonio": "0,83",
      "cota": "57,66"
    },
    {
      "nome": "QAMI11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,88",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,87",
      "patrimonio": "1,09",
      "cota": "94,15"
    },
    {
      "nome": "QIFF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "QIRI11",
      "ultimoRedimentoRS": "89,64",
      "ultimosRedimento": "N/A",
      "dataPagamento": "11/10/2022",
      "dataBase": "04/10/2022",
      "rendimentoMedioAnual": "7,92",
      "patrimonio": "N/A",
      "cota": "89,61"
    },
    {
      "nome": "RBBV11",
      "ultimoRedimentoRS": "0,22",
      "ultimosRedimento": "N/A",
      "dataPagamento": "22/07/2021",
      "dataBase": "20/07/2021",
      "rendimentoMedioAnual": "2,76",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RBCB11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RBCO11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RBDS11",
      "ultimoRedimentoRS": "2,35",
      "ultimosRedimento": "11,21",
      "dataPagamento": "12/07/2021",
      "dataBase": "30/06/2021",
      "rendimentoMedioAnual": "0,20",
      "patrimonio": "0,93",
      "cota": "20,59"
    },
    {
      "nome": "RBED11",
      "ultimoRedimentoRS": "1,43",
      "ultimosRedimento": "1,02",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,28",
      "patrimonio": "0,91",
      "cota": "144,35"
    },
    {
      "nome": "RBFF11",
      "ultimoRedimentoRS": "0,50",
      "ultimosRedimento": "0,81",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,50",
      "patrimonio": "0,82",
      "cota": "69,19"
    },
    {
      "nome": "RBGS11",
      "ultimoRedimentoRS": "0,18",
      "ultimosRedimento": "0,62",
      "dataPagamento": "14/01/2022",
      "dataBase": "30/12/2021",
      "rendimentoMedioAnual": "0,15",
      "patrimonio": "0,54",
      "cota": "N/A"
    },
    {
      "nome": "RBHG11",
      "ultimoRedimentoRS": "1,05",
      "ultimosRedimento": "1,16",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,08",
      "patrimonio": "1,19",
      "cota": "91,88"
    },
    {
      "nome": "RBHY11",
      "ultimoRedimentoRS": "1,15",
      "ultimosRedimento": "1,19",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,21",
      "patrimonio": "1,25",
      "cota": "93,70"
    },
    {
      "nome": "RBIR11",
      "ultimoRedimentoRS": "0,46",
      "ultimosRedimento": "0,53",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,23",
      "patrimonio": "0,27",
      "cota": "103,69"
    },
    {
      "nome": "RBIV11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RBLG11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "N/A",
      "dataPagamento": "11/09/2023",
      "dataBase": "01/09/2023",
      "rendimentoMedioAnual": "0,89",
      "patrimonio": "N/A",
      "cota": "101,70"
    },
    {
      "nome": "RBOP11",
      "ultimoRedimentoRS": "2,40",
      "ultimosRedimento": "0,77",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "8,23",
      "patrimonio": "2,64",
      "cota": "848,97"
    },
    {
      "nome": "RBRD11",
      "ultimoRedimentoRS": "0,34",
      "ultimosRedimento": "0,92",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,32",
      "patrimonio": "0,86",
      "cota": "66,21"
    },
    {
      "nome": "RBRF11",
      "ultimoRedimentoRS": "0,55",
      "ultimosRedimento": "0,65",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "0,62",
      "patrimonio": "0,74",
      "cota": "88,53"
    },
    {
      "nome": "RBRI11",
      "ultimoRedimentoRS": "17,86",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/02/2022",
      "dataBase": "18/02/2022",
      "rendimentoMedioAnual": "5,95",
      "patrimonio": "N/A",
      "cota": "1.221,79"
    },
    {
      "nome": "RBRL11",
      "ultimoRedimentoRS": "0,72",
      "ultimosRedimento": "0,80",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,64",
      "patrimonio": "0,72",
      "cota": "105,15"
    },
    {
      "nome": "RBRM11",
      "ultimoRedimentoRS": "2.002,09",
      "ultimosRedimento": "N/A",
      "dataPagamento": "19/04/2023",
      "dataBase": "12/04/2023",
      "rendimentoMedioAnual": "4.004,18",
      "patrimonio": "N/A",
      "cota": "46.981,16"
    },
    {
      "nome": "RBRP11",
      "ultimoRedimentoRS": "0,25",
      "ultimosRedimento": "0,42",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,28",
      "patrimonio": "0,48",
      "cota": "82,42"
    },
    {
      "nome": "RBRR11",
      "ultimoRedimentoRS": "0,65",
      "ultimosRedimento": "0,72",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "0,84",
      "patrimonio": "0,93",
      "cota": "94,51"
    },
    {
      "nome": "RBRS11",
      "ultimoRedimentoRS": "0,40",
      "ultimosRedimento": "0,72",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,42",
      "patrimonio": "0,76",
      "cota": "94,23"
    },
    {
      "nome": "RBRX11",
      "ultimoRedimentoRS": "1,10",
      "ultimosRedimento": "1,18",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "1,25",
      "patrimonio": "1,34",
      "cota": "96,31"
    },
    {
      "nome": "RBRY11",
      "ultimoRedimentoRS": "1,20",
      "ultimosRedimento": "1,18",
      "dataPagamento": "19/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "1,15",
      "patrimonio": "1,13",
      "cota": "98,84"
    },
    {
      "nome": "RBTS11",
      "ultimoRedimentoRS": "21,93",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "39,96",
      "patrimonio": "N/A",
      "cota": "818,64"
    },
    {
      "nome": "RBVA11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "0,89",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,00",
      "patrimonio": "0,90",
      "cota": "108,26"
    },
    {
      "nome": "RBVO11",
      "ultimoRedimentoRS": "0,02",
      "ultimosRedimento": "0,24",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,02",
      "patrimonio": "0,18",
      "cota": "18,04"
    },
    {
      "nome": "RCFA11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RCFF11",
      "ultimoRedimentoRS": "1,23",
      "ultimosRedimento": "1,32",
      "dataPagamento": "19/01/2023",
      "dataBase": "12/01/2023",
      "rendimentoMedioAnual": "0,32",
      "patrimonio": "0,34",
      "cota": "92,78"
    },
    {
      "nome": "RCKF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RCRB11",
      "ultimoRedimentoRS": "0,77",
      "ultimosRedimento": "0,51",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,75",
      "patrimonio": "0,49",
      "cota": "208,37"
    },
    {
      "nome": "RCRI11B",
      "ultimoRedimentoRS": "12,48",
      "ultimosRedimento": "N/A",
      "dataPagamento": "17/12/2021",
      "dataBase": "10/12/2021",
      "rendimentoMedioAnual": "3,34",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RDES11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RDPD11",
      "ultimoRedimentoRS": "0,30",
      "ultimosRedimento": "1,32",
      "dataPagamento": "23/08/2023",
      "dataBase": "16/08/2023",
      "rendimentoMedioAnual": "1,14",
      "patrimonio": "5,01",
      "cota": "22,72"
    },
    {
      "nome": "RECR11",
      "ultimoRedimentoRS": "0,60",
      "ultimosRedimento": "0,67",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,86",
      "patrimonio": "0,96",
      "cota": "96,37"
    },
    {
      "nome": "RECT11",
      "ultimoRedimentoRS": "0,40",
      "ultimosRedimento": "0,82",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,48",
      "patrimonio": "0,98",
      "cota": "92,52"
    },
    {
      "nome": "RECX11",
      "ultimoRedimentoRS": "0,40",
      "ultimosRedimento": "0,59",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,64",
      "patrimonio": "0,94",
      "cota": "76,68"
    },
    {
      "nome": "REIT11",
      "ultimoRedimentoRS": "9,59",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2023",
      "dataBase": "30/06/2023",
      "rendimentoMedioAnual": "20,76",
      "patrimonio": "N/A",
      "cota": "298,30"
    },
    {
      "nome": "RELG11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,99",
      "dataPagamento": "14/03/2023",
      "dataBase": "07/03/2023",
      "rendimentoMedioAnual": "0,78",
      "patrimonio": "1,10",
      "cota": "121,90"
    },
    {
      "nome": "REON11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RFOF11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,92",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,72",
      "patrimonio": "0,88",
      "cota": "83,70"
    },
    {
      "nome": "RINV11",
      "ultimoRedimentoRS": "2,00",
      "ultimosRedimento": "1,80",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,82",
      "patrimonio": "0,74",
      "cota": "110,04"
    },
    {
      "nome": "RMAI11",
      "ultimoRedimentoRS": "0,26",
      "ultimosRedimento": "0,50",
      "dataPagamento": "12/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,26",
      "patrimonio": "0,50",
      "cota": "99,17"
    },
    {
      "nome": "RNDP11",
      "ultimoRedimentoRS": "2,00",
      "ultimosRedimento": "1,48",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "3,70",
      "patrimonio": "2,74",
      "cota": "179,54"
    },
    {
      "nome": "RNGO11",
      "ultimoRedimentoRS": "0,36",
      "ultimosRedimento": "0,76",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,41",
      "patrimonio": "0,88",
      "cota": "86,56"
    },
    {
      "nome": "ROOF11",
      "ultimoRedimentoRS": "41,72",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/06/2023",
      "dataBase": "31/05/2023",
      "rendimentoMedioAnual": "26,70",
      "patrimonio": "N/A",
      "cota": "652,40"
    },
    {
      "nome": "RPRI11",
      "ultimoRedimentoRS": "0,87",
      "ultimosRedimento": "0,87",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,18",
      "patrimonio": "1,18",
      "cota": "102,15"
    },
    {
      "nome": "RRCI11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "1,14",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,98",
      "patrimonio": "1,17",
      "cota": "92,85"
    },
    {
      "nome": "RSPD11",
      "ultimoRedimentoRS": "8,72",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/08/2023",
      "dataBase": "31/07/2023",
      "rendimentoMedioAnual": "8,76",
      "patrimonio": "N/A",
      "cota": "1.161,49"
    },
    {
      "nome": "RURA11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,13",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,12",
      "patrimonio": "1,15",
      "cota": "10,00"
    },
    {
      "nome": "RVBI11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,89",
      "dataPagamento": "18/09/2023",
      "dataBase": "11/09/2023",
      "rendimentoMedioAnual": "0,75",
      "patrimonio": "0,89",
      "cota": "87,16"
    },
    {
      "nome": "RZAG11",
      "ultimoRedimentoRS": "0,14",
      "ultimosRedimento": "1,40",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,13",
      "patrimonio": "1,29",
      "cota": "9,50"
    },
    {
      "nome": "RZAK11",
      "ultimoRedimentoRS": "1,16",
      "ultimosRedimento": "1,22",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "1,28",
      "patrimonio": "1,34",
      "cota": "93,05"
    },
    {
      "nome": "RZAT11",
      "ultimoRedimentoRS": "0,73",
      "ultimosRedimento": "0,82",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,92",
      "patrimonio": "1,04",
      "cota": "99,99"
    },
    {
      "nome": "RZDM11",
      "ultimoRedimentoRS": "281,25",
      "ultimosRedimento": "N/A",
      "dataPagamento": "20/06/2023",
      "dataBase": "15/06/2023",
      "rendimentoMedioAnual": "24,15",
      "patrimonio": "N/A",
      "cota": "549,83"
    },
    {
      "nome": "RZEO11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "RZTR11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "0,86",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,95",
      "patrimonio": "0,96",
      "cota": "97,29"
    },
    {
      "nome": "SAAG11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SACL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SADI11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "1,13",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,03",
      "patrimonio": "1,17",
      "cota": "95,14"
    },
    {
      "nome": "SAIC11B",
      "ultimoRedimentoRS": "0,66",
      "ultimosRedimento": "N/A",
      "dataPagamento": "16/10/2018",
      "dataBase": "01/10/2018",
      "rendimentoMedioAnual": "0,73",
      "patrimonio": "N/A",
      "cota": "55,12"
    },
    {
      "nome": "SALI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SARE11",
      "ultimoRedimentoRS": "0,48",
      "ultimosRedimento": "0,86",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,60",
      "patrimonio": "1,09",
      "cota": "94,52"
    },
    {
      "nome": "SBCL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SCPF11",
      "ultimoRedimentoRS": "0,02",
      "ultimosRedimento": "0,46",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "0,02",
      "patrimonio": "0,47",
      "cota": "11,69"
    },
    {
      "nome": "SDIL11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,76",
      "dataPagamento": "14/08/2023",
      "dataBase": "31/07/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "0,82",
      "cota": "95,88"
    },
    {
      "nome": "SDIP11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SEED11",
      "ultimoRedimentoRS": "0,74",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,96",
      "patrimonio": "N/A",
      "cota": "89,36"
    },
    {
      "nome": "SEQR11",
      "ultimoRedimentoRS": "0,71",
      "ultimosRedimento": "1,09",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,69",
      "patrimonio": "1,05",
      "cota": "93,52"
    },
    {
      "nome": "SFND11",
      "ultimoRedimentoRS": "1,59",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/01/2022",
      "dataBase": "06/01/2022",
      "rendimentoMedioAnual": "0,13",
      "patrimonio": "N/A",
      "cota": "9,41"
    },
    {
      "nome": "SHDP11B",
      "ultimoRedimentoRS": "8,50",
      "ultimosRedimento": "N/A",
      "dataPagamento": "20/09/2023",
      "dataBase": "12/09/2023",
      "rendimentoMedioAnual": "7,52",
      "patrimonio": "N/A",
      "cota": "1.288,33"
    },
    {
      "nome": "SHOP11",
      "ultimoRedimentoRS": "6,75",
      "ultimosRedimento": "N/A",
      "dataPagamento": "30/03/2022",
      "dataBase": "23/03/2022",
      "rendimentoMedioAnual": "0,56",
      "patrimonio": "N/A",
      "cota": "48,22"
    },
    {
      "nome": "SHPH11",
      "ultimoRedimentoRS": "3,75",
      "ultimosRedimento": "0,48",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "4,02",
      "patrimonio": "0,51",
      "cota": "890,58"
    },
    {
      "nome": "SHSO11",
      "ultimoRedimentoRS": "0,89",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,84",
      "patrimonio": "N/A",
      "cota": "99,62"
    },
    {
      "nome": "SIGR11",
      "ultimoRedimentoRS": "1,50",
      "ultimosRedimento": "N/A",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "1,07",
      "patrimonio": "N/A",
      "cota": "101,62"
    },
    {
      "nome": "SJAU11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SLDZ11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SNAG11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,15",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,12",
      "patrimonio": "1,13",
      "cota": "100,85"
    },
    {
      "nome": "SNCI11",
      "ultimoRedimentoRS": "1,00",
      "ultimosRedimento": "1,00",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "1,03",
      "patrimonio": "1,03",
      "cota": "98,92"
    },
    {
      "nome": "SNEL11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SNFF11",
      "ultimoRedimentoRS": "0,65",
      "ultimosRedimento": "0,69",
      "dataPagamento": "25/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,72",
      "patrimonio": "0,77",
      "cota": "93,78"
    },
    {
      "nome": "SNLG11",
      "ultimoRedimentoRS": "0,35",
      "ultimosRedimento": "0,99",
      "dataPagamento": "25/07/2023",
      "dataBase": "14/07/2023",
      "rendimentoMedioAnual": "0,42",
      "patrimonio": "1,19",
      "cota": "61,48"
    },
    {
      "nome": "SOLR11",
      "ultimoRedimentoRS": "4,77",
      "ultimosRedimento": "N/A",
      "dataPagamento": "10/04/2023",
      "dataBase": "31/03/2023",
      "rendimentoMedioAnual": "7,82",
      "patrimonio": "N/A",
      "cota": "915,67"
    },
    {
      "nome": "SPAF11",
      "ultimoRedimentoRS": "5,52",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "9,80",
      "patrimonio": "N/A",
      "cota": "1.009,79"
    },
    {
      "nome": "SPDE11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SPMO11",
      "ultimoRedimentoRS": "0,43",
      "ultimosRedimento": "N/A",
      "dataPagamento": "28/12/2022",
      "dataBase": "21/12/2022",
      "rendimentoMedioAnual": "0,04",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "SPTW11",
      "ultimoRedimentoRS": "0,46",
      "ultimosRedimento": "1,11",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,42",
      "patrimonio": "1,01",
      "cota": "56,00"
    },
    {
      "nome": "SPVJ11",
      "ultimoRedimentoRS": "0,67",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,68",
      "patrimonio": "N/A",
      "cota": "116,77"
    },
    {
      "nome": "SPXS11",
      "ultimoRedimentoRS": "1,23",
      "ultimosRedimento": "1,20",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,89",
      "cota": "96,34"
    },
    {
      "nome": "SRVD11",
      "ultimoRedimentoRS": "0,20",
      "ultimosRedimento": "2,29",
      "dataPagamento": "14/04/2022",
      "dataBase": "07/04/2022",
      "rendimentoMedioAnual": "0,04",
      "patrimonio": "0,40",
      "cota": "0,74"
    },
    {
      "nome": "STRX11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,76",
      "patrimonio": "N/A",
      "cota": "163,96"
    },
    {
      "nome": "TBOF11",
      "ultimoRedimentoRS": "0,21",
      "ultimosRedimento": "N/A",
      "dataPagamento": "09/06/2022",
      "dataBase": "02/06/2022",
      "rendimentoMedioAnual": "0,09",
      "patrimonio": "N/A",
      "cota": "0,21"
    },
    {
      "nome": "TCIN11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "TCPF11",
      "ultimoRedimentoRS": "1,52",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "06/09/2023",
      "rendimentoMedioAnual": "1,76",
      "patrimonio": "N/A",
      "cota": "125,27"
    },
    {
      "nome": "TELD11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "TELF11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "TELM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "TEPP11",
      "ultimoRedimentoRS": "0,58",
      "ultimosRedimento": "0,65",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,55",
      "patrimonio": "0,61",
      "cota": "95,04"
    },
    {
      "nome": "TGAR11",
      "ultimoRedimentoRS": "1,42",
      "ultimosRedimento": "1,16",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,40",
      "patrimonio": "1,14",
      "cota": "118,03"
    },
    {
      "nome": "THRA11",
      "ultimoRedimentoRS": "0,13",
      "ultimosRedimento": "N/A",
      "dataPagamento": "13/08/2021",
      "dataBase": "09/08/2021",
      "rendimentoMedioAnual": "3,92",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "TJKB11",
      "ultimoRedimentoRS": "2,62",
      "ultimosRedimento": "N/A",
      "dataPagamento": "27/09/2023",
      "dataBase": "19/09/2023",
      "rendimentoMedioAnual": "2,44",
      "patrimonio": "N/A",
      "cota": "267,70"
    },
    {
      "nome": "TMPS11",
      "ultimoRedimentoRS": "0,80",
      "ultimosRedimento": "0,76",
      "dataPagamento": "13/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,23",
      "patrimonio": "0,22",
      "cota": "108,58"
    },
    {
      "nome": "TORD11",
      "ultimoRedimentoRS": "0,05",
      "ultimosRedimento": "0,90",
      "dataPagamento": "14/02/2023",
      "dataBase": "07/02/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "1,43",
      "cota": "14,02"
    },
    {
      "nome": "TORM13",
      "ultimoRedimentoRS": "10,56",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/10/2021",
      "dataBase": "30/09/2021",
      "rendimentoMedioAnual": "5,34",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "TOUR11",
      "ultimoRedimentoRS": "0,24",
      "ultimosRedimento": "2,75",
      "dataPagamento": "14/12/2021",
      "dataBase": "30/11/2021",
      "rendimentoMedioAnual": "10,96",
      "patrimonio": "124,59",
      "cota": "N/A"
    },
    {
      "nome": "TRBL11",
      "ultimoRedimentoRS": "0,72",
      "ultimosRedimento": "0,71",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "0,80",
      "cota": "95,71"
    },
    {
      "nome": "TRNT11",
      "ultimoRedimentoRS": "0,42",
      "ultimosRedimento": "0,34",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,41",
      "patrimonio": "0,33",
      "cota": "196,67"
    },
    {
      "nome": "TRXB11",
      "ultimoRedimentoRS": "0,92",
      "ultimosRedimento": "0,77",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,93",
      "patrimonio": "0,77",
      "cota": "109,45"
    },
    {
      "nome": "TRXF11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "0,79",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,89",
      "patrimonio": "0,78",
      "cota": "106,05"
    },
    {
      "nome": "TSER11",
      "ultimoRedimentoRS": "0,92",
      "ultimosRedimento": "0,90",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,94",
      "patrimonio": "0,92",
      "cota": "100,51"
    },
    {
      "nome": "TSNC11",
      "ultimoRedimentoRS": "0,63",
      "ultimosRedimento": "N/A",
      "dataPagamento": "23/02/2023",
      "dataBase": "14/02/2023",
      "rendimentoMedioAnual": "16,01",
      "patrimonio": "N/A",
      "cota": "88,14"
    },
    {
      "nome": "TSNM11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "UBSR11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "UMED11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "URPR11",
      "ultimoRedimentoRS": "1,16",
      "ultimosRedimento": "1,19",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,24",
      "patrimonio": "1,27",
      "cota": "100,03"
    },
    {
      "nome": "VCJR11",
      "ultimoRedimentoRS": "0,55",
      "ultimosRedimento": "0,60",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "0,88",
      "cota": "96,81"
    },
    {
      "nome": "VCRA11",
      "ultimoRedimentoRS": "1,25",
      "ultimosRedimento": "1,30",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,33",
      "patrimonio": "1,38",
      "cota": "102,85"
    },
    {
      "nome": "VCRI11",
      "ultimoRedimentoRS": "0,09",
      "ultimosRedimento": "0,98",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "1,29",
      "cota": "9,65"
    },
    {
      "nome": "VCRR11",
      "ultimoRedimentoRS": "0,69",
      "ultimosRedimento": "0,90",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,68",
      "patrimonio": "0,89",
      "cota": "128,38"
    },
    {
      "nome": "VDSV11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "VERE11",
      "ultimoRedimentoRS": "2,40",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "2,43",
      "patrimonio": "N/A",
      "cota": "363,29"
    },
    {
      "nome": "VGHF11",
      "ultimoRedimentoRS": "0,12",
      "ultimosRedimento": "1,25",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,11",
      "patrimonio": "1,09",
      "cota": "9,42"
    },
    {
      "nome": "VGIA11",
      "ultimoRedimentoRS": "0,13",
      "ultimosRedimento": "1,36",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,14",
      "patrimonio": "1,47",
      "cota": "9,51"
    },
    {
      "nome": "VGIP11",
      "ultimoRedimentoRS": "0,64",
      "ultimosRedimento": "0,68",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "0,86",
      "cota": "93,63"
    },
    {
      "nome": "VGIR11",
      "ultimoRedimentoRS": "0,13",
      "ultimosRedimento": "1,34",
      "dataPagamento": "20/09/2023",
      "dataBase": "13/09/2023",
      "rendimentoMedioAnual": "0,12",
      "patrimonio": "1,28",
      "cota": "9,64"
    },
    {
      "nome": "VIDS11",
      "ultimoRedimentoRS": "129,27",
      "ultimosRedimento": "N/A",
      "dataPagamento": "20/04/2022",
      "dataBase": "13/04/2022",
      "rendimentoMedioAnual": "10,77",
      "patrimonio": "N/A",
      "cota": "884,77"
    },
    {
      "nome": "VIFI11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,82",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "0,76",
      "cota": "9,42"
    },
    {
      "nome": "VILG11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,67",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,68",
      "patrimonio": "0,65",
      "cota": "111,91"
    },
    {
      "nome": "VINO11",
      "ultimoRedimentoRS": "0,06",
      "ultimosRedimento": "0,65",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,06",
      "patrimonio": "0,69",
      "cota": "54,37"
    },
    {
      "nome": "VISC11",
      "ultimoRedimentoRS": "0,92",
      "ultimosRedimento": "0,76",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,82",
      "patrimonio": "0,68",
      "cota": "114,98"
    },
    {
      "nome": "VIUR11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,86",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,07",
      "patrimonio": "0,86",
      "cota": "9,06"
    },
    {
      "nome": "VJFD11",
      "ultimoRedimentoRS": "0,74",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,95",
      "patrimonio": "N/A",
      "cota": "136,34"
    },
    {
      "nome": "VLIQ11",
      "ultimoRedimentoRS": "5,04",
      "ultimosRedimento": "N/A",
      "dataPagamento": "29/12/2022",
      "dataBase": "22/12/2022",
      "rendimentoMedioAnual": "7,56",
      "patrimonio": "N/A",
      "cota": "5,09"
    },
    {
      "nome": "VLJS11",
      "ultimoRedimentoRS": "28,05",
      "ultimosRedimento": "N/A",
      "dataPagamento": "26/04/2023",
      "dataBase": "19/04/2023",
      "rendimentoMedioAnual": "46,29",
      "patrimonio": "N/A",
      "cota": "1.037,72"
    },
    {
      "nome": "VLOL11",
      "ultimoRedimentoRS": "16,30",
      "ultimosRedimento": "N/A",
      "dataPagamento": "31/05/2023",
      "dataBase": "24/05/2023",
      "rendimentoMedioAnual": "1,98",
      "patrimonio": "N/A",
      "cota": "111,06"
    },
    {
      "nome": "VOTS11",
      "ultimoRedimentoRS": "0,75",
      "ultimosRedimento": "0,89",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,98",
      "patrimonio": "1,17",
      "cota": "94,03"
    },
    {
      "nome": "VPSI11",
      "ultimoRedimentoRS": "0,19",
      "ultimosRedimento": "N/A",
      "dataPagamento": "08/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,19",
      "patrimonio": "N/A",
      "cota": "21,42"
    },
    {
      "nome": "VRTA11",
      "ultimoRedimentoRS": "0,70",
      "ultimosRedimento": "0,76",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,91",
      "patrimonio": "0,98",
      "cota": "94,33"
    },
    {
      "nome": "VSEC11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "N/A",
      "dataPagamento": "15/06/2023",
      "dataBase": "31/05/2023",
      "rendimentoMedioAnual": "7,99",
      "patrimonio": "N/A",
      "cota": "36,30"
    },
    {
      "nome": "VSHO11",
      "ultimoRedimentoRS": "0,72",
      "ultimosRedimento": "0,93",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,65",
      "patrimonio": "0,84",
      "cota": "101,41"
    },
    {
      "nome": "VSLH11",
      "ultimoRedimentoRS": "0,03",
      "ultimosRedimento": "0,83",
      "dataPagamento": "15/09/2023",
      "dataBase": "08/09/2023",
      "rendimentoMedioAnual": "0,06",
      "patrimonio": "1,72",
      "cota": "10,22"
    },
    {
      "nome": "VTLT11",
      "ultimoRedimentoRS": "0,88",
      "ultimosRedimento": "0,89",
      "dataPagamento": "11/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,86",
      "patrimonio": "0,87",
      "cota": "101,11"
    },
    {
      "nome": "VTPA11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "VTPL11",
      "ultimoRedimentoRS": "5,11",
      "ultimosRedimento": "N/A",
      "dataPagamento": "16/12/2019",
      "dataBase": "09/12/2019",
      "rendimentoMedioAnual": "0,48",
      "patrimonio": "N/A",
      "cota": "76,26"
    },
    {
      "nome": "VTVI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "VTXI11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "VVCO11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "VVCR11",
      "ultimoRedimentoRS": "0,06",
      "ultimosRedimento": "0,27",
      "dataPagamento": "26/09/2023",
      "dataBase": "19/09/2023",
      "rendimentoMedioAnual": "0,67",
      "patrimonio": "2,90",
      "cota": "22,21"
    },
    {
      "nome": "VVPR11",
      "ultimoRedimentoRS": "0,89",
      "ultimosRedimento": "0,89",
      "dataPagamento": "30/09/2022",
      "dataBase": "23/09/2022",
      "rendimentoMedioAnual": "0,60",
      "patrimonio": "0,60",
      "cota": "98,03"
    },
    {
      "nome": "VVRI11",
      "ultimoRedimentoRS": "1,30",
      "ultimosRedimento": "1,32",
      "dataPagamento": "26/09/2023",
      "dataBase": "19/09/2023",
      "rendimentoMedioAnual": "0,68",
      "patrimonio": "0,69",
      "cota": "95,68"
    },
    {
      "nome": "VXXV11",
      "ultimoRedimentoRS": "10,76",
      "ultimosRedimento": "N/A",
      "dataPagamento": "13/11/2020",
      "dataBase": "30/10/2020",
      "rendimentoMedioAnual": "1,54",
      "patrimonio": "N/A",
      "cota": "876,17"
    },
    {
      "nome": "WHGR11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "1,03",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,09",
      "patrimonio": "0,97",
      "cota": "10,09"
    },
    {
      "nome": "WPLZ11",
      "ultimoRedimentoRS": "0,41",
      "ultimosRedimento": "0,61",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,48",
      "patrimonio": "0,72",
      "cota": "87,80"
    },
    {
      "nome": "WSEC11",
      "ultimoRedimentoRS": "0,95",
      "ultimosRedimento": "1,09",
      "dataPagamento": "15/09/2023",
      "dataBase": "11/09/2023",
      "rendimentoMedioAnual": "1,01",
      "patrimonio": "1,17",
      "cota": "100,45"
    },
    {
      "nome": "WTSP11B",
      "ultimoRedimentoRS": "0,20",
      "ultimosRedimento": "0,55",
      "dataPagamento": "22/09/2023",
      "dataBase": "15/09/2023",
      "rendimentoMedioAnual": "0,23",
      "patrimonio": "0,64",
      "cota": "72,52"
    },
    {
      "nome": "WVSC11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "XBXO11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "XPCA11",
      "ultimoRedimentoRS": "0,14",
      "ultimosRedimento": "1,45",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,13",
      "patrimonio": "1,35",
      "cota": "9,48"
    },
    {
      "nome": "XPCI11",
      "ultimoRedimentoRS": "0,90",
      "ultimosRedimento": "1,03",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,87",
      "patrimonio": "0,99",
      "cota": "94,75"
    },
    {
      "nome": "XPCM11",
      "ultimoRedimentoRS": "0,07",
      "ultimosRedimento": "0,58",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,12",
      "patrimonio": "0,97",
      "cota": "41,83"
    },
    {
      "nome": "XPHT11",
      "ultimoRedimentoRS": "127,70",
      "ultimosRedimento": "103,82",
      "dataPagamento": "08/08/2023",
      "dataBase": "01/08/2023",
      "rendimentoMedioAnual": "11,94",
      "patrimonio": "9,71",
      "cota": "98,81"
    },
    {
      "nome": "XPIN11",
      "ultimoRedimentoRS": "0,65",
      "ultimosRedimento": "0,79",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "0,65",
      "patrimonio": "0,79",
      "cota": "103,93"
    },
    {
      "nome": "XPLG11",
      "ultimoRedimentoRS": "0,78",
      "ultimosRedimento": "0,69",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,75",
      "patrimonio": "0,66",
      "cota": "111,33"
    },
    {
      "nome": "XPML11",
      "ultimoRedimentoRS": "0,85",
      "ultimosRedimento": "0,75",
      "dataPagamento": "25/09/2023",
      "dataBase": "18/09/2023",
      "rendimentoMedioAnual": "0,81",
      "patrimonio": "0,71",
      "cota": "112,54"
    },
    {
      "nome": "XPPR11",
      "ultimoRedimentoRS": "0,10",
      "ultimosRedimento": "0,45",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,18",
      "patrimonio": "0,82",
      "cota": "70,49"
    },
    {
      "nome": "XPSF11",
      "ultimoRedimentoRS": "0,08",
      "ultimosRedimento": "0,86",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,08",
      "patrimonio": "0,88",
      "cota": "8,81"
    },
    {
      "nome": "XTED11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "YCHY11",
      "ultimoRedimentoRS": "N/A",
      "ultimosRedimento": "N/A",
      "dataPagamento": "N/A",
      "dataBase": "N/A",
      "rendimentoMedioAnual": "N/A",
      "patrimonio": "N/A",
      "cota": "N/A"
    },
    {
      "nome": "YUFI11",
      "ultimoRedimentoRS": "0,38",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "0,27",
      "patrimonio": "N/A",
      "cota": "101,69"
    },
    {
      "nome": "ZAVI11",
      "ultimoRedimentoRS": "1,16",
      "ultimosRedimento": "0,92",
      "dataPagamento": "15/09/2023",
      "dataBase": "31/08/2023",
      "rendimentoMedioAnual": "1,03",
      "patrimonio": "0,81",
      "cota": "135,22"
    },
    {
      "nome": "ZIFI11",
      "ultimoRedimentoRS": "3,31",
      "ultimosRedimento": "N/A",
      "dataPagamento": "14/07/2022",
      "dataBase": "30/06/2022",
      "rendimentoMedioAnual": "0,68",
      "patrimonio": "N/A",
      "cota": "1.200,00"
    }
  ]
  dataJson_FiiDetalhado = [
    {
      "userId" :  "User1",
      "codigoFii": "tepp11",
      "nomeCompleto": "TELLUS PROPERTIES - FDO INV. IMO",
      "cota": "R$ 91,31",
      "variacao": "+ 0,10%",
      "valorizacao": "1,27%",
      "historicoDividendos": [
        {
          "dataBase" : "2021/09/30",
          // "qtdCotas" : "5",
          "dataPagamento" : "2023/09/05",
          "cotacaoBase" : "130,65",
          "dividendoYeild" : "1,20",
          "rendimento" : "0,50",
        },
        {
          "dataBase" : "2022/09/30",
          "dataPagamento" : "2023/09/05",
          "cotacaoBase" : "127,65",
          "dividendoYeild" : "1,20",
          "rendimento" : "0,50",
        },
        {
          "dataBase" : "2023/07/05",
          "dataPagamento" : "2023/07/05",
          "cotacaoBase" : "134,32",
          "dividendoYeild" : "0,20",
          "rendimento" : "0,70",
        },
      ],
      "administrador": { 
        "email" : "",
        "telefone" : "",
        "nomeNoPregao" : "",      
        "razaoSocial" : "",      
        "cnpj" : "11.026.627/0001-38",    
        "segmento" : "Fundo de Fundos",
        "publicoAlvo" : "",
        "patrimonio" : "",
        "site" : "",
        "tipoGestao" : "",
        // "numeroDeCotas" : ""
      },    
    },
    {
      "userId" :  "User1",
      "codigoFii": "bcff11",
      "nomeCompleto": "BTG PACTUAL - FDO INV. IMO",
      "cota": "R$ 132,31",
      "variacao": "- 0,10%",
      "valorizacao": "1,27%",
      "historicoDividendos": [
        {
          "dataBase" : "2021/09/30",
          "dataPagamento" : "2021/09/05",
          "cotacaoBase" : "77,65",
          "dividendoYeild" : "1,20",
          "rendimento" : "0,50",
        },
        {
          "dataBase" : "2022/05/30",
          "dataPagamento" : "2023/09/05",
          "cotacaoBase" : "84,65",
          "dividendoYeild" : "1,20",
          "rendimento" : "0,50",
        },
        {
          "dataBase" : "2023/09/30",
          "dataPagamento" : "2023/09/05",
          "cotacaoBase" : "78,65",
          "dividendoYeild" : "1,20",
          "rendimento" : "0,50",
        },
      ],
      "administrador": { 
        "email" : "",
        "telefone" : "",
        "nomeNoPregao" : "",      
        "razaoSocial" : "",      
        "cnpj" : "11.026.627/0001-38",    
        "segmento" : "Fundo de Fundos",
        "publicoAlvo" : "",
        "patrimonio" : "",
        "site" : "",
        "tipoGestao" : "",
        // "numeroDeCotas" : "",
      },    
    }
  ]

  public getFIIList() : Promise<Response> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(
                new Response(JSON.stringify(this.dataJson_Fii), {
                    status: 200, // Ok
                    headers: {
                        "Content-Type": "application/json; utf-8",
                    },
                })
            )
        }, 2000) // simular atraso de 2 segundos
    })
  }

  public getListaFIIUsuario(userId : string) : Promise<Response> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(
                new Response(JSON.stringify(this.dataJson_FiiDetalhado), {
                    status: 200, // Ok
                    headers: {
                        "Content-Type": "application/json; utf-8",
                    },
                })
            )
        }, 2000) // simular atraso de 2 segundos
    })
  }

  public relizarLogin(email : string, senha : string) : Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if(email == 'teste@gmail.com'){
          resolve(
            new Response(JSON.stringify(''), {
              status: 200, // Ok
              headers: {
                  "Content-Type": "application/json; utf-8",
              },
            })
          )
        }
        else {
          resolve(
            new Response(null, {
              status: 500, // Ok
              headers: {
                  "Content-Type": "application/json; utf-8",
              },
            })
          )
        }
      }, 2000) // simular atraso de 2 segundos
    })
  }

  public efetuarCompra(params : TransacaoType) : Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {       
        resolve(
          new Response(JSON.stringify("Compra de cota realizada com sucesso."), {
            status: 200, // Ok
            headers: {
              "Content-Type": "application/json; utf-8",
            },
          })
        )        
      }, 5000) // simular atraso de 5 segundos
    })
  }

  public efetuarVenda(params : TransacaoType) : Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {       
        resolve(
          new Response(JSON.stringify("Compra de cota realizada com sucesso."), {
            status: 200, // Ok
            headers: {
              "Content-Type": "application/json; utf-8",
            },
          })
        )        
      }, 5000) // simular atraso de 5 segundos
    })
  }

  // Notícias --------------------------->
  private noticiasJson : NoticiaType[] = [
    {
      titulo : 'BCFF11 acab de anunciar novos dividendos para Outubro; Veja o valor',
      descricao : 'O fundo imobiliário BCFF11 divulgou um novo pagamento de rendimentos para este mês de Outubro. veja o valor e a data de pagamento.',
      tempoPassado : "3 dias atrás",
      fonte : "FIIs",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/_u2wWGvRZMGQuQHS4u_g1RAYY6VwWzeoSQ7iQlPvgtQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2RpbmhlaXJvLW1v/ZWRhcy1icmFzaWxl/aXJhcy0xLXJlYWwt/Y2VkdWxhXzU4NzAy/LTYyMjcuanBnP3Np/emU9NjI2JmV4dD1q/cGc'
    },
    {
      titulo : 'BTG Pactual Fundo de Fundos (BCFF11) tem dividendo yeild de 9% ao ano e é FoF favorito de analista da Empiricus',
      descricao : 'Analista identifica no BCFF11 menor volatilidade dentre os principais FoFs da indpustria e desconto das cotas....',
      tempoPassado : '3 horas atrás',
      fonte : "Empiricus",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/sym1mqBT-e4ESz8ZI1NrpE0jZIe7h7i8kmuK8ZrfKQA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMS9EU0Nf/Mjc2OC5qcGc_Zml0/PTEyMzUsMTAyNCZx/dWFsaXR5PTcwJnN0/cmlwPWFsbA'
    },
    {
      titulo : 'BCFF11 e VISC11 caem pela 3° vez seguida, MXRF11 spbre e IFIx atinge menor patamar desde julho',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 meses atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 meses atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 horas atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 minutos atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 horas atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 segundos atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },

    {
      titulo : 'Noticias Sobre FII Qualquer Para Teste de DTO',
      descricao : 'Os FIIs BCFF11 e VISC11 caíram pela 3° vez seguida dentre outros. Veja destaques do dia.',
      tempoPassado : '5 horas atrás',
      fonte : "Suno",
      url: '',
      urlImagem : 'https://imgs.search.brave.com/aSmG9DNk7YYp7JcxVifpsjZ1jOEI6akIGVFT6UtUfgU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5mb21vbmV5LmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMi9HZXR0/eUltYWdlcy0xMjkw/OTA0NDEwLWxvdy5q/cGc_cmVzaXplPTM2/MCwyMDImcXVhbGl0/eT03MCZzdHJpcD1h/bGw'
    },
  ]
  
  public buscarNoticiasFundo(codigos : string[]) : Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          new Response (JSON.stringify(this.noticiasJson), {
            status:200,
            headers: {
              "Content-Type": "application/json; utf-8",
            }  
          })
        )
      }, 1000)
    })
  }
}

export default FIIApi;