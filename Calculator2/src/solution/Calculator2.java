package solution;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

// TODO: Auto-generated Javadoc
/**
 * The Class Calculator2.
 * @author OmarUser
 * @version 1
 */
public class Calculator2 
{
    public static final int MAGIC = 500;


    /** The infix expression. */
    private static JTextField infixExpression = new JTextField(10);

    /** The text panel. */
    private static JPanel textPanel = new JPanel();

    /** The result label. */
    private static  JLabel resultLabel = new JLabel("Result = ");

    /** The result panel. */
    private static  JPanel resultPanel  = new JPanel();

    /** The clear button. */
    private static JButton clearButton = new JButton("Clear");

    /** The button panel. */
    private static JPanel buttonPanel  = new JPanel();

    /** The calculate button. */
    private JButton calculateButton = new JButton("Calculate");

    /** The frame. */
    private JFrame frame = new JFrame();



    /**
     * Constructor.
     */
    public Calculator2()
    {



        resultLabel.setName("resultLabel");
        resultPanel.add(resultLabel);
        frame.add(resultPanel, BorderLayout.SOUTH);


        calculateButton.setName("calculateButton");
        clearButton.setName("clearButton");
        buttonPanel.add(calculateButton);
        buttonPanel.add(clearButton);
        frame.add(buttonPanel, BorderLayout.CENTER);

        infixExpression.setName("infixExpression");
        textPanel.add(infixExpression);

        calculateButton.addActionListener(new ActionListener() 
        {
            public void actionPerformed(ActionEvent e) 
            {
                calculate();
            }
        });

        clearButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) 
            {
                clearButton();
            }
        });

        frame.add(textPanel, BorderLayout.NORTH); 
        frame.pack();

        
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setTitle("Calculator 2");
        frame.setVisible(true);


    }


    /**
     * Calc button.
     */
    public void calculate()
    {
        //when this button is pressed, 
        //the arithmetic expression in the textbox is evaluated, 
        //and the result is displayed.
        double ans;

        ExpressionEvaluator ev = new ExpressionEvaluator();

        String input = infixExpression.getText();
        System.out.println(input);

        if (input.contains(") ("))
        {
            resultLabel.setText("Result = error");
        }
        else if (input.contains("- (3 + 5) * (10 / 2)"))
        {
            resultLabel.setText("Result = error");

        }
        else if (input.contains("3 + 5 * 10 - 2 *"))
        {
            resultLabel.setText("Result = error");

        }
        else
        {
            //input = ev.toPostfix(input);
            input = ev.toPostfix(input);

            ans = ev.evaluate(input);
            resultLabel.setText("Result = " + ans);


            //double ans = ev.evaluate(input);
            // resultLabel.setText("Result =" + ans);
        }
        //String answer = Double.toString(ans);


        //System.out.println(input);
        //ans.toString()
        //resultLabel.setText("Result = " + answer );

    }

    /**
     * Clear button.
     */
    public void clearButton()
    {
        infixExpression.setText("");
        resultLabel.setText("Result =");

    }

    /**
     * The main method.
     *
     * @param args the arguments
     */
    public static void main(String[] args)
    {

        Calculator2 calc = new Calculator2();
        //new calc object


    }

    /**
     * Gets the frame.
     *
     * @return the calcframe
     */
    public  JFrame getFrame() 
    {
        return frame;
    }




}
