package br.com.elyontec.cobranca.service.impl;

import br.com.elyontec.cobranca.entity.Divida;
import br.com.elyontec.cobranca.repository.DividaRepository;
import br.com.elyontec.cobranca.service.IDividaService;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
public class DividaService implements IDividaService {

    @Autowired
    private DividaRepository dividaRepository;


    @Override
    public List<Divida> todasDividas() {
        return (List<Divida>) dividaRepository.findAll();
    }

    @Override
    @Transactional
    public void importarDivida(MultipartFile file) {
        boolean registro = false;
        List<Divida> dividas = new ArrayList<>();
        String[] linha ;
        DateTimeFormatter formatoData = DateTimeFormatter.ofPattern("ddMMyyyy");
        try {
            Reader reader = new InputStreamReader(new ByteArrayInputStream(file.getBytes()));
            CSVReader csvReader = new CSVReader(reader);
            while ((linha = csvReader.readNext()) != null){
                linha[5] = linha[5].length() == 7 ? "0".concat(linha[5]) : linha[5];
                if(registro) {
                    Divida divida = new Divida(null, LocalDate.parse(linha[0],formatoData),linha[1],linha[2],linha[4],linha[3],
                            LocalDate.parse(linha[5], formatoData),linha[6],linha[7],!linha[8].trim().isEmpty() ? Integer.valueOf(linha[8]) : null,linha[9],linha[10],linha[11],linha[12],linha[13],linha[14],
                            linha[15],linha[16],linha[17],linha[18],linha[19],linha[20],linha[21],linha[22],linha[23],linha[24],linha[25],linha[26],linha[27],
                            linha[28],new BigDecimal(linha[29]),linha[30],linha[31],LocalDate.parse(linha[32]),Integer.valueOf(linha[33]),new BigDecimal(linha[34]),new BigDecimal(linha[35]),null,linha[37],
                            linha[38],linha[39],linha[40]);
                    dividas.add(divida);
                }
                registro = true;
            }
            reader.close();
            csvReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CsvException e) {
            e.printStackTrace();
        }

        dividaRepository.saveAll(dividas);
    }

}
