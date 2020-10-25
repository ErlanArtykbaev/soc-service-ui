import React from 'react';
import ourPartners from '../../../assets/img/ourPartners.jpg';
import $ from 'jquery';
import Button from '../../UI/Button/Button';

const FeedBack = () => {
  $('body').on('focus', '.wrap input', function(event) {
    $(this)
      .parent()
      .addClass('active');
  });

  $('body').on('blur', '.wrap input', function() {
    if (!$(this).val().length > 0) {
      $(this)
        .parent()
        .removeClass('active');
    }
  });

  $('body').on('keyup', '.wrap input', function() {
    $('.wrap .from').text($(this).val().length);

    if ($(this).val().length >= 6) {
      $('.wrap .count').addClass('active');
    } else {
      $('.wrap .count').removeClass('active');
    }

    if (
      $(this)
        .val()
        .search(/\d/) != -1
    ) {
      $('.wrap .number').addClass('active');
    } else {
      $('.wrap .number').removeClass('active');
    }

    if (/[A-Z]/.test($(this).val())) {
      $('.wrap .upper').addClass('active');
    } else {
      $('.wrap .upper').removeClass('active');
    }
  });

  $('body').on('click', '.wrap svg:not(.active)', function() {
    $(this).addClass('active');
    $('.wrap input').attr('type', 'text');
  });

  $('body').on('click', '.wrap svg.active', function() {
    $(this).removeClass('active');
    $('.wrap input').attr('type', 'password');
  });

  return (
    <>
      <section className={'feedback'}>

        <div className={'container '}>
          <div className={''}>
            <div className="row">
              <div className={'col-sm-12 col-md-8  feedback_inLeftBlock'}>
                <div>
                  <h3 className={'baseLightBlueColor'}>
                    Всегда на шаг впереди
                  </h3>
                  <br />
                  <br />
                  <p className={'d-block px-20 fw-400'}>
                    «Сегодня, когда компания оступается, она сразу слышит за
                    собой дыхание конкурентов, поскольку в современном бизнесе
                    не ходят, а бегают.»
                  </p>
                  <p className={'d-block text-right px-20 fw-500'}>
                    Джек Траут
                  </p>
                </div>
                <div>
                  <h5 className={'fw-500 px-20 baseGrayColor'}>
                    Наши портнеры
                  </h5>
                  <img
                    className={'feedback_ourPartnersImage'}
                    src={ourPartners}
                    alt="our partners"
                  />
                </div>
              </div>

              <div className={'col-sm-12 col-md-4  feedback_inRightBlock'}>
                <div className={'feedback_emailUs'}>
                  <div>
                    <p className={'feedback_description'}>Есть Вопросы?</p>
                    <h4 className={'feedback_title'}>Напишите нам</h4>
                  </div>

                  <form action="" className={'feedback_form row'}>
                    <div className="form-group col-sm-12 col-md-12 py-2">
                      <div className="wrap">
                        <div className="group  feedback_fieldLabel baseGrayColor">
                          <input type="password" id="pas" />
                          <label htmlFor="pas">Фамилия Имя</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-sm-12 col-md-6  py-2">
                      <div className="wrap">
                        <div className="group  feedback_fieldLabel baseGrayColor">
                          <input type="password" id="pas" />
                          <label htmlFor="pas">Номер Тел.</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-sm-12 col-md-6  py-2">
                      <div className="wrap">
                        <div className="group feedback_fieldLabel baseGrayColor">
                          <input type="password" id="pas" />
                          <label htmlFor="pas">Email</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-sm-12 col-md-12 py-2">
                      <div className="wrap">
                        <div className="group feedback_fieldLabel baseGrayColor ">
                          <input
                            type={'text'}
                            className={'feedback_textarea'}
                            id=""
                          />
                          <label htmlFor="pas">Введите текст</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group col-sm-12 col-md-12">
                      <Button type={'submit'} children={'Отправить'} />
                    </div>
										
                  </form>
									
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default FeedBack;
